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

  getPetByName(name: string): Observable<Pet[]>{
    const token = localStorage.getItem('Token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Pet[]>(`https://localhost:7056/api/Pet/GetPet/${name}`, {headers});
  }

  getByFilter(form: galleryFilterDTO){
    const token = localStorage.getItem('Token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = new HttpParams().set('age', form.edad);
    return this.httpClient.get<Pet[]>("https://localhost:7056/api/Pet/GetPetByFilters/", {headers, params});
  }
}
