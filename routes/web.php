<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

/**
 * Enrutamiento de laravel para permitir el enrutamiento
 * desde react
 */
Route::group(['middleware' => ['auth']], function(){
    Route::resource('cars', 'CarController');
    Route::get('/me', function(){
        return Auth::user();
    });
    Route::get('/dashboard/{path?}', [
        'uses'=> function(){
            return view('dashboard');
        },
        'as' => 'dashboard',
        'where' => ['path' => '.*']
    ])->name('dashboard');
});
