import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../Entities/medical-record';
import { VeterinarioService } from './veterinario.services';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit{

  medicalRecords: MedicalRecord[] = [];
  show: string = "1";
  crud: number = 1;
  constructor(private VeterinarioServices: VeterinarioService){}

  ngOnInit(): void {
    this.VeterinarioServices.getAllMedicalRecords().subscribe(datos => {
      this.medicalRecords = datos;
      //console.log(this.appointments);
    });
  }


  mostrarDatos(){
    this.show = "1";
  }

  mostrarHistoriales(){
    this.show = "2";
  }

  mostrarMascotas(){
    this.show = "3";
  }
}
