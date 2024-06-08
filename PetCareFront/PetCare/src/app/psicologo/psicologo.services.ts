import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../../app/Entities/appointment';
import { Observable } from 'rxjs';
import { Pshicologist } from '../Entities/pshicologist';
import { Vet } from '../Entities/vet';
import { Adopter } from '../Entities/adopter';
import { Pet } from '../Entities/pet';
import { AdoptionForm } from '../Entities/adoption-form';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Appointment[]>("https://localhost:7056/api/Appointment/GetAppointments", { headers });
  }

  getAllPsichologists(): Observable<Pshicologist[]> {
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pshicologist[]>("https://localhost:7056/api/Psichologist/GetPsichologists", { headers });
  }

  getAllAdopters(): Observable<Adopter[]> {
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Adopter[]>("https://localhost:7056/api/Adopter/GetAdopters", { headers });
  }

  getInfo(): Observable<Pshicologist> {
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const idUser = localStorage.getItem('idUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pshicologist>(`https://localhost:7056/api/Psichologist/GetPsichologist/${idUser}`, { headers });
  }

  crearCita(appointment: Appointment):Observable<Appointment>{
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    return this.httpClient.post<Appointment>(`https://localhost:7056/api/Appointment/CreateAppointment`, appointment, { headers })
  }

  getInfoAppointment(guid: string): Observable<Appointment> {
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Appointment>(`https://localhost:7056/api/Appointment/GetAppointment/${guid}`, { headers });
  }

  getAdoptionForm(guid: string): Observable<AdoptionForm>{
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.httpClient.get<AdoptionForm>(`https://localhost:7056/api/AdoptionForm/GetAdoptionForm/${guid}`, { headers });
  }

  confirmarCita(pet: Pet): Observable<Pet>{
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.put<Pet>(`https://localhost:7056/api/Pet/EditPet/${pet.idPet}`, pet, {headers});
  }
}
