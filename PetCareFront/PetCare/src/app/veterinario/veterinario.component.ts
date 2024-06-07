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
  vet: any = {} ;
  show: string = "1";
  crud: number = 1;
  constructor(private VeterinarioServices: VeterinarioService){}

  ngOnInit(): void {
    this.VeterinarioServices.getInfo().subscribe(datos =>{
      console.log(datos);
      this.vet = datos;
    });
    this.VeterinarioServices.getAllMedicalRecords().subscribe(datos => {
      this.medicalRecords = datos;
      console.log(this.medicalRecords);
    });
  }

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
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
