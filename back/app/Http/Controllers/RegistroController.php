<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegistroController extends Controller{
    function index(){
        $registros = Registro::orderBy('id', 'desc')->get();
        return $registros;
    }
    public function store(Request $request)
    {
        $request->validate([
            'firstSurname' => 'required|string',
            'firstName' => 'required|string',
            'ci' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'profession' => 'required|string',
            'departamento' => 'required|string',
            'provincia' => 'required|string',
            'direccion' => 'required|string',
            'file' => 'required|file|mimes:pdf,jpg,jpeg,png',
//            'file2' => 'nullable|file|mimes:pdf,jpg,jpeg,png'
        ]);

        // Guardar archivos
        $path1 = $request->file('file')->store('comprobantes', 'public');
        $path2 = $request->hasFile('file2') ? $request->file('file2')->store('comprobantes', 'public') : null;

        $registro = Registro::create([
            ...$request->only([
                'firstSurname', 'secondSurname', 'firstName', 'secondName',
                'ci', 'phone', 'email', 'profession', 'professionOther',
                'departamento', 'provincia', 'direccion'
            ]),
            'cursoTaller' => $request->cursoTaller ? 1 : 0,
            'file' => $path1,
            'file2' => $path2
        ]);

        return response()->json(['success' => true, 'data' => $registro], 201);
    }
    public function crearUsuarioDesdeRegistro(Request $request)
    {
        $registro = Registro::findOrFail($request->id);

        $yaExiste = User::where('ci', $registro->ci)
//            ->orWhere('email', $registro->email)
            ->exists();

        if ($yaExiste) {
            return response()->json([
                'success' => false,
                'message' => 'Este usuario ya fue creado.'
            ], 409);
        }

        $user = User::create([
            'firstName' => $registro->firstName,
            'secondName' => $registro->secondName,
            'lastName' => $registro->firstSurname,
            'secondLastName' => $registro->secondSurname,
            'ci' => $registro->ci,
            'phone' => $registro->phone,
            'celular' => $registro->phone,
            'email' => $registro->email,
            'correo' => $registro->email,
            'profession' => $registro->profession,
            'departamento' => $registro->departamento,
            'provincia' => $registro->provincia,
            'direccion' => $registro->direccion,
            'password' => Hash::make($registro->ci), // contraseña = ci
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Usuario creado correctamente.',
            'data' => $user
        ]);
    }
}
