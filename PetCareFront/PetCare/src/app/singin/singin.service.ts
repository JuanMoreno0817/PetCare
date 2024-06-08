import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adopter } from '../Entities/adopter';

@Injectable({
  providedIn: 'root'
})
export class SinginService {

  constructor(private httpClient:HttpClient) { }

  postAdopter(adopter: Adopter): Observable<Adopter>{
    return this.httpClient.post<Adopter>("https://localhost:7056/api/Adopter/CreateAdopter", adopter);
  }
  
}
