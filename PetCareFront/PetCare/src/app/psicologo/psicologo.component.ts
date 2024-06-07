import { Component, OnInit } from '@angular/core';
import { PsicologoService } from './psicologo.services';
import { Appointment } from '../Entities/appointment';
import { Pshicologist } from '../Entities/pshicologist';
import { Vet } from '../Entities/vet';
import { Adopter } from '../Entities/adopter';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit{

  appointments: Appointment[] = [];
  pshicologists: Pshicologist[] = [];
  pshicologist: any = {};
  adopters: Adopter[] = [];
  constructor(private PsicologoServices: PsicologoService){}
  
  ngOnInit(): void {
    this.PsicologoServices.getInfo().subscribe(datos =>{
      this.pshicologist = datos;
    });
    this.PsicologoServices.getAllAppointments().subscribe(datos => {
      this.appointments = datos;
      //console.log(this.appointments);
    });
    this.PsicologoServices.getAllPsichologists().subscribe(datos => {
      this.pshicologists = datos;
      //console.log(this.appointments);
    });
    this.PsicologoServices.getAllAdopters().subscribe(datos => {
      this.adopters = datos;
      //console.log(this.appointments);
    });
  }

  show: boolean = true;
  crud: number = 1;

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  mostrarCitas(){
    this.show = false;
  }

  mostrarDatos(){
    this.show = true;
  }
}
