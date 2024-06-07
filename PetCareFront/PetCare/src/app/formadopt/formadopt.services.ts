import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../Entities/pet';

@Injectable({
  providedIn: 'root'
})
export class FormAdoptService {

  constructor(private httpClient: HttpClient) { }

  getAllPets():Observable<Pet[]>{
    const token = localStorage.getItem('Token'); // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pet[]>("https://localhost:7056/api/Pet/GetPets", {headers});
  }
}
