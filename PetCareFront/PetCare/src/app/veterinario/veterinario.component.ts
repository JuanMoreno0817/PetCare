import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MedicalRecord } from '../Entities/medical-record';
import { VeterinarioService } from './veterinario.services';
import { AlertasService } from '../alertas/alertas.service';
import { Pet } from '../Entities/pet';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  //Elementos input de historial
  @ViewChild('idHistorial') idHistorial!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('createDate') createDate!: ElementRef;
  @ViewChild('updateDate') updateDate!: ElementRef;
  @ViewChild('btnActualizar') btnActualizar!: ElementRef;
  //Elementos para creacino mascota
  @ViewChild('name') name!: ElementRef;
  @ViewChild('age') age!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  @ViewChild('race') race!: ElementRef;
  @ViewChild('weight') weight!: ElementRef;
  @ViewChild('height') height!: ElementRef;
  @ViewChild('Type') Type!: ElementRef;
  @ViewChild('genero') genero!: ElementRef;
  @ViewChild('descripcion') descripcion!: ElementRef;

  medicalRecords: MedicalRecord[] = [];
  vet: any = {};
  show: string = "1";
  crud: number = 1;
  constructor(private VeterinarioServices: VeterinarioService, private alerta: AlertasService) { }

  ngOnInit(): void {
    this.VeterinarioServices.getInfo().subscribe(datos => {
      //console.log(datos);
      this.vet = datos;
    });
    this.VeterinarioServices.getAllMedicalRecords().subscribe(datos => {
      //console.log(this.medicalRecords);
      this.medicalRecords = datos;
    });
  }

  getMedicalRecord(id: string) {
    this.VeterinarioServices.getMedicalRecord(id).subscribe(datos => {
      //console.log(datos);
      if(datos){
        this.description.nativeElement.value = datos.description;
        if(datos.createDate)
          this.createDate.nativeElement.value = this.formatDateString(datos.createDate.toString());
        this.updateDate.nativeElement.value = datos.updateDate;
        this.idHistorial.nativeElement.disabled = true;
        this.description.nativeElement.disabled = false;
        this.btnActualizar.nativeElement.disabled = false;
      }
    });
  }

  postMedicalRecord() {
    let medicalRecord: MedicalRecord = {
      description: this.description.nativeElement.value,
      vet: this.vet
    }
    console.log(medicalRecord);
    this.VeterinarioServices.postMedicalRecord(medicalRecord).subscribe(datos => {
      if (datos) {
        this.alerta.showSuccess("Historial clínico agregado exitosamente", "Hecho");
        this.VeterinarioServices.getAllMedicalRecords().subscribe(datos => {
          //console.log(this.medicalRecords);
          this.medicalRecords = datos;
        });
      } else {
        this.alerta.showError("El historial no se agregó", "Error");
      }
    });
  }
  
  putMedicalRecord() {
    let medicalRecord: MedicalRecord = {
      idMedicalRe: this.idHistorial.nativeElement.value,
      createDate: this.createDate.nativeElement.value,
      description: this.description.nativeElement.value,
      vet: this.vet
    }
    //console.log(medicalRecord);
    this.VeterinarioServices.putMedicalRecord(medicalRecord).subscribe(datos => {
      this.idHistorial.nativeElement.value = "";
      this.description.nativeElement.value = "";
      this.createDate.nativeElement.value = "";
      this.updateDate.nativeElement.value = "";
      this.idHistorial.nativeElement.disabled = false;
      this.description.nativeElement.disabled = true;
      this.btnActualizar.nativeElement.disabled = true;
      if (datos) {
        this.alerta.showSuccess("Historial clínico actualizado exitosamente", "Hecho");
      } else {
        this.alerta.showError("El historial no se actualizó", "Error");
      }
    });
  }
  
  deleteMedicalRecord(id: string) {
    this.VeterinarioServices.deleteMedicalRecord(id).subscribe(datos => {
      //console.log(datos);
      this.idHistorial.nativeElement.value = "";
      this.description.nativeElement.value = "";
      this.createDate.nativeElement.value = "";
      this.updateDate.nativeElement.value = "";
      this.idHistorial.nativeElement.disabled = false;
      this.description.nativeElement.disabled = true;
      this.btnActualizar.nativeElement.disabled = true;
      if (datos) {
        this.alerta.showSuccess("Historial clínico eliminado exitosamente", "Hecho");
        this.VeterinarioServices.getAllMedicalRecords().subscribe(datos => {
          //console.log(this.medicalRecords);
          this.medicalRecords = datos;
        });
      } else {
        this.alerta.showError("El historial no se eliminó", "Error");
      }
    });
  }

  createPet(){
    let pet: Pet = {
      name: this.name.nativeElement.value,
      age: Number(this.age.nativeElement.value),
      color: this.color.nativeElement.value,
      race: this.race.nativeElement.value,
      weight: Number(this.weight.nativeElement.value),
      height: Number(this.height.nativeElement.value),
      description: this.descripcion.nativeElement.value,
      genero: Number(this.genero.nativeElement.value),
      status: 0,
      tipo: Number(this.Type.nativeElement.value),
      idMedicalRecord: null
    }
    //console.log(pet);
    this.VeterinarioServices.createPet(pet).subscribe(datos =>{
      if (datos) {
        this.age.nativeElement.value = null;
        this.name.nativeElement.value = "";
        this.color.nativeElement.value = "";
        this.race.nativeElement.value = "";
        this.weight.nativeElement.value = null;
        this.height.nativeElement.value = null;
        this.descripcion.nativeElement.value = "";
        this.genero.nativeElement.value = "Default";
        this.Type.nativeElement.value = "Default";
        this.alerta.showSuccess("Mascota agregada exitosamente", "Hecho");
      } else {
        this.alerta.showError("La mascota no se agregó", "Error");
      }
    })
  }

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  mostrarDatos() {
    this.show = "1";
  }

  mostrarHistoriales() {
    this.show = "2";
  }

  mostrarMascotas() {
    this.show = "3";
  }
}
