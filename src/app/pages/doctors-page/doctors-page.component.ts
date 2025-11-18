import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../types/doctor.interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-doctors-page',  
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './doctors-page.component.html',  
  styleUrls: ['./doctors-page.component.css']
})
export class DoctorsPageComponent {
  private doctorsService = inject(DoctorsService);  
  
  doctors = toSignal(this.doctorsService.getDoctors(), {
    initialValue: [] as Doctor[]
  });
}