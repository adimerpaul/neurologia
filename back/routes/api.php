<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/login',[\App\Http\Controllers\UserController::class,'login']);
Route::post('/register',[\App\Http\Controllers\UserController::class,'register']);
Route::post('/registro', [\App\Http\Controllers\RegistroController::class, 'store']);
//Route::post('upload/{id}/{option}', [\App\Http\Controllers\UploadController::class, 'upload']);
Route::group(['middleware'=>'auth:sanctum'],function () {
    Route::get('/registro', [\App\Http\Controllers\RegistroController::class, 'index']);
    Route::post('/registro', [\App\Http\Controllers\RegistroController::class, 'store']);
    Route::post('/registro/{id}', [\App\Http\Controllers\RegistroController::class, 'update']);
    Route::delete('/registro/{id}', [\App\Http\Controllers\RegistroController::class, 'destroy']);

    Route::post('/me', [\App\Http\Controllers\UserController::class, 'me']);
    Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout']);
    Route::post('/cambiarPass', [\App\Http\Controllers\UserController::class, 'cambiarPass']);
    Route::put('/updatePassword/{user}', [\App\Http\Controllers\UserController::class, 'updatePassword']);
    Route::post('/registro/crear-usuario', [\App\Http\Controllers\RegistroController::class, 'crearUsuarioDesdeRegistro']);

    Route::resource('videos', \App\Http\Controllers\VideoController::class);
    Route::resource('users', \App\Http\Controllers\UserController::class);
    Route::post('/verVideo', [\App\Http\Controllers\VideoController::class, 'verVideo']);
});
Route::get('/programa', [\App\Http\Controllers\ProgramaController::class, 'programa']);
