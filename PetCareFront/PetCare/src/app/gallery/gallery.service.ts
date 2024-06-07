import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Pet } from '../../app/Entities/pet';
import { Observable } from 'rxjs';
import { galleryFilterDTO } from './galleryFilter';

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

  getPetByNameString(name: string): Observable<Pet[]>{
    const token = localStorage.getItem('Token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pet[]>(`https://localhost:7056/api/Pet/GetPetsByNameString/${name}`, {headers});
  }

  getPetByName(name: string): Observable<Pet>{
    const token = localStorage.getItem('Token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pet>(`https://localhost:7056/api/Pet/GetPetByName/${name}`, {headers});
  }

  getByFilter(filters: galleryFilterDTO): Observable<Pet[]> {
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post<Pet[]>(`https://localhost:7056/api/Pet/GetFilteredPets`, filters, { headers });
  }
}
