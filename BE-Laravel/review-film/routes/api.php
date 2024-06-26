<?php

use App\Http\Controllers\API\CastController;
use App\Http\Controllers\API\GenresController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MovieController;


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


Route::prefix('v1')->group(function () {
    
    Route::post('/movie', [MovieController::class, 'store']);
    Route::apiResource('cast', CastController::class);
    Route::apiResource('genre', GenresController::class);
   

});