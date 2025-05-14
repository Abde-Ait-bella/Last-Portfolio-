<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;
use App\Mail\ConfirmationEmail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function sendContactEmail(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        $projects = Project::all();

        try {
            // Envoyer l'email à vous-même avec le message du contact
            Mail::to('abdessamadaitbella1998@gmail.com')->send(new ContactMessage($data));
            
            // Envoyer l'email de confirmation à l'utilisateur
            Mail::to($data['email'])->send(new ConfirmationEmail($data));

            return Inertia::render('Home', [
                'success' => 'Message envoyé avec succès!',
                'projects' => $projects,
            ]);
        } catch (\Throwable $th) {
            return Inertia::render('Home', [
                'error' => 'Erreur lors de l\'envoi du message: ' . $th->getMessage(),
                'projects' => $projects,
            ]);
        }
    }
}
