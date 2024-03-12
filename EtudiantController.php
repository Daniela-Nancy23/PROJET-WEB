<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use App\Models\Etudiant;

class EtudiantController extends Controller
{
    public function liste_etudiant()
    {
        $etudiants=Etudiant::all();
        return view('etudiant.liste', compact('etudiants'));
    }


    public function ajouter_etudiant()
    {
        return view('etudiant.ajouter');
    }

   /* public function ajouter_etudiant_traitement(Request $request)
    {
        
    
        // Validation des données côté serveur
        $request-> validate( [
            'nom' => 'required|string|max:40|min:2', 
            'prenom' => 'required|string|max:40|min:2',
            'email' => 'required|email|unique:etudiants',
            'password' => ['required','string'],
            'localisation' => 'required|string|max:40',
        ]);
    
        
    
        // Création d'un nouvel étudiant si la validation réussit
        $etudiant = new Etudiant();
        $etudiant->nom = $request->nom;
        $etudiant->prenom = $request->prenom;
        $etudiant->email = $request->email;
        $etudiant->password = Hash::make($request->password);
        $etudiant->localisation = $request->localisation;
        $etudiant->save();
    
        return redirect('/ajouter')->with('status', 'L\'étudiant a bien été ajouté avec succès.');
    }*/

    public function ajouter_etudiant_traitement(Request $request)
{
    // Validation des données côté serveur
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    // Tentative de connexion de l'utilisateur
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        // L'utilisateur est connecté avec succès
        return response()->json(['message' => 'Connexion réussie !'], 200);
    } else {
        // L'authentification a échoué
        return response()->json(['erreur' => 'Email ou mot de passe incorrect.'], 401);
    }
}

    public function delete_etudiant($id)
    {

        $etudiant =Etudiant::find($id);
        $etudiant->delete();
        return redirect('/ajouter')->with('status', 'Le produit a bien été supprimé avec succès.');

    }
    



}
