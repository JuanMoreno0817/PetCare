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
  adopters: Adopter[] = [];
  constructor(private PsicologoServices: PsicologoService){}
  
  ngOnInit(): void {
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

  show: boolean = false;
  crud: number = 1;

  mostrarCitas(){
    this.show = false;
  }

  mostrarDatos(){
    this.show = true;
  }
}
