import { Injectable } from '@angular/core';
import { LogInDTO } from './login';
import { ResponseLogin } from './login.response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  post(form:LogInDTO): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>("https://localhost:7056/api/Login", form);
  }
}
