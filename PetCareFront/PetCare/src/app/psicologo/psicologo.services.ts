import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../../app/Entities/appointment';
import { Observable } from 'rxjs';
import { Pshicologist } from '../Entities/pshicologist';
import { Vet } from '../Entities/vet';
import { Adopter } from '../Entities/adopter';

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

  getAllPsichologists():Observable<Pshicologist[]>{
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pshicologist[]>("https://localhost:7056/api/Psichologist/GetPsichologists", {headers});
  }
  
  getAllAdopters():Observable<Adopter[]>{
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Adopter[]>("https://localhost:7056/api/Adopter/GetAdopters", {headers});
  }
}
