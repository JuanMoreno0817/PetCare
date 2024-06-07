import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdoptanteComponent } from "./adoptante.component";
import { Adopter } from "../Entities/adopter";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AdoptanteService {

    constructor(private httpClient: HttpClient) { }

    getInfo(): Observable<Adopter> {
        const token = localStorage.getItem('Token'); // Obtén el token del localStorage
        const idUser = localStorage.getItem('idUser');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.get<Adopter>(`https://localhost:7056/api/Adopter/GetAdopter/${idUser}`, { headers });
    }
}
