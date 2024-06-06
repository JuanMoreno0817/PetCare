import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../../app/Entities/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor(private httpClient: HttpClient) { }

  getAllAppointments():Observable<Appointment[]>{
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Appointment[]>("https://localhost:7056/api/Appointment/GetAppointments", {headers});
  }
}
