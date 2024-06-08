import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MedicalRecord } from '../Entities/medical-record';
import { VeterinarioService } from './veterinario.services';
import { AlertasService } from '../alertas/alertas.service';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {

  @ViewChild('idHistorial') idHistorial!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('createDate') createDate!: ElementRef;
  @ViewChild('updateDate') updateDate!: ElementRef;
  @ViewChild('btnActualizar') btnActualizar!: ElementRef;

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
      this.description.nativeElement.value = datos.description;
      this.createDate.nativeElement.value = datos.createDate;
      this.updateDate.nativeElement.value = datos.updateDate;
      this.idHistorial.nativeElement.disabled = true;
      this.description.nativeElement.disabled = false;
      this.btnActualizar.nativeElement.disabled = false;
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
