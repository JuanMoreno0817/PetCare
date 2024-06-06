import { Component, OnInit } from '@angular/core';
import { PsicologoService } from './psicologo.services';
import { Appointment } from '../Entities/appointment';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit{

  appointments: Appointment[] = [];
  constructor(private PsicologoServices: PsicologoService){}
  
  ngOnInit(): void {
    this.PsicologoServices.getAllAppointments().subscribe(datos => {
      this.appointments = datos;
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
