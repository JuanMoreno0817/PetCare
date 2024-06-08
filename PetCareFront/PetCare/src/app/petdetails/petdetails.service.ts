import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AdoptionForm } from '../Entities/adoption-form';
import { Observable } from 'rxjs';
import { Adopter } from '../Entities/adopter';

@Injectable({
  providedIn: 'root'
})
export class PetdetailsService {

  constructor(private httpClient: HttpClient) { }

  createAdoptionForm(adoptionForm: AdoptionForm): Observable<AdoptionForm>{
    console.log('Aquí recién entrando al servicio', adoptionForm);
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    return this.httpClient.post<AdoptionForm>("https://localhost:7056/api/AdoptionForm/CreateAdoptionForm", adoptionForm, { headers });
  }

  getAdopterByEmail(email: string): Observable<Adopter>{
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Adopter>(`https://localhost:7056/api/Adopter/GetAdopterByEmail/${email}`, {headers});
  }
}
