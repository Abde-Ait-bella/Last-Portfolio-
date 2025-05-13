<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;
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
            Mail::to('abdessamadaitbella1998@gmail.com')->send(new ContactMessage($data));

            return  Inertia::render('Home', [
                'success' => 'Message envoyé avec succès!',
                'projects' => $projects,
            ]) ;
        } catch (\Throwable $th) {
            return Inertia::render('Home', [
                'error' => 'Erreur lors de l\'envoi du message!',
                'projects' => $projects,
            ]);
        }

    }

}
