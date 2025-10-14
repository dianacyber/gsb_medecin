import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  imports: [],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css'
})
export class Doctor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  speciality: string;
  address: string;
}


