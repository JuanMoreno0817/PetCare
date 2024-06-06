import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from '../../app/Entities/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  getAllPets():Observable<Pet[]>{
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pet[]>("https://localhost:7056/api/Pet/GetPets", {headers});
  }

  getPetByName(name: string): Observable<Pet>{
    const token = localStorage.getItem('Token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pet>(`https://localhost:7056/api/Pet/GetPet/${name}`, {headers});
  }
}
