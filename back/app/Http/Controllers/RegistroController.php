<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use Illuminate\Http\Request;

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
}
