<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProjectController::class, 'index'])
    ->name('home');

Route::post('/sendEmail', [ProjectController::class, 'sendEmail'])
    ->name('sendEmail.send');

Route::post('/contact', [ContactController::class, 'sendContactEmail'])->name('contact.send');

// Route::post('/contact', [ContactController::class, 'sendContactEmail']);

