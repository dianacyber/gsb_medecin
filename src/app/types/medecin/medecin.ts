import { Component } from '@angular/core';

@Component({
  selector: 'app-medecin',
  imports: [],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css'
})
export class Medecin {
    id: number;
  nom: string;
  prenom: string;
  email: string;
  specialite: string;
  adresse: string;
}
