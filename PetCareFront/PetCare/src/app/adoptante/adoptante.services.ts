import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdoptanteComponent } from "./adoptante.component";
import { Adopter } from "../Entities/adopter";
import { Observable } from "rxjs";
import { Appointment } from "../Entities/appointment";
import { AdoptionForm } from "../Entities/adoption-form";

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

    getAppointment(id: string): Observable<Appointment> {
        return this.httpClient.get<Appointment>(`https://localhost:7056/api/Appointment/GetAppointment/${id}`);
    }

    getAllAppointments(): Observable<Appointment[]> {
        return this.httpClient.get<Appointment[]>("https://localhost:7056/api/Appointment/GetAppointments");
    }

    getAllAdoptions(): Observable<AdoptionForm[]> {
        const id = localStorage.getItem('idUser');
        return this.httpClient.get<AdoptionForm[]>(`https://localhost:7056/api/AdoptionForm/GetAdoptionByAdopter/${id}`);
    }

    deleteAppointment(id: string): Observable<Appointment> {
        return this.httpClient.delete<Appointment>(`https://localhost:7056/api/Appointment/DeleteAppointment/${id}`);
    }
}
