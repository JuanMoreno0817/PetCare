import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedicalRecord } from '../Entities/medical-record';
import { Observable } from 'rxjs';
import { Vet } from '../Entities/vet';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private httpClient: HttpClient) { }

  getAllMedicalRecords(): Observable<MedicalRecord[]> {
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<MedicalRecord[]>("https://localhost:7056/api/MedicalRecord/GetMedicalRecords", { headers });
  }

  getInfo(): Observable<Vet> {
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const idUser = localStorage.getItem('idUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Vet>(`https://localhost:7056/api/Vet/GetVet/${idUser}`, { headers });
}
}
