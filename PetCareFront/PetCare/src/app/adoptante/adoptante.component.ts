import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdoptanteService } from './adoptante.services';
import { Appointment } from '../Entities/appointment';
import { AdoptionForm } from '../Entities/adoption-form';
import { AlertasService } from '../alertas/alertas.service';

@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent implements OnInit {

  @ViewChild('idAppointment') idAppointment!: ElementRef;
  @ViewChild('appointmentDate') appointmentDate!: ElementRef;
  @ViewChild('adopter') adopter!: ElementRef;
  @ViewChild('psichologist') psichologist!: ElementRef;
  @ViewChild('btnActualizar') btnActualizar!: ElementRef;

  show: boolean = true;
  crud: number = 1;
  adoptante: any = {};
  appointments: Appointment[] = [];
  adoptions: AdoptionForm[] = [];

  constructor(private adoptanteService: AdoptanteService, private alerta: AlertasService) { }

  ngOnInit(): void {
    this.adoptanteService.getInfo().subscribe(datos => {
      //console.log(datos);
      this.adoptante = datos;
    });
    this.adoptanteService.getAllAppointments().subscribe(datos => {
      //console.log(datos);
      this.appointments = datos;
    });
    this.adoptanteService.getAllAdoptions().subscribe(datos => {
      console.log(datos);
      this.adoptions = datos;
    });
  }

  getAppointment(id: string) {
    this.adoptanteService.getAppointment(id).subscribe(datos => {
      console.log(datos);
      this.appointmentDate.nativeElement.value = this.formatDateString(datos.appointmentDate.toString());
      this.adopter.nativeElement.value = datos.adopter?.name + " " + datos.adopter?.lastname;
      this.psichologist.nativeElement.value = datos.psichologist?.name + " " + datos.psichologist?.lastname;
      this.idAppointment.nativeElement.disabled = true;
      this.btnActualizar.nativeElement.disabled = false;
    });
  }

  deleteAppointment(id: string) {
    this.adoptanteService.deleteAppointment(id).subscribe(datos => {
      //console.log(datos);
      this.idAppointment.nativeElement.value = "";
      this.appointmentDate.nativeElement.value = "";
      this.adopter.nativeElement.value = "";
      this.psichologist.nativeElement.value = "";
      this.idAppointment.nativeElement.disabled = false;
      this.btnActualizar.nativeElement.disabled = true;
      if (datos) {
        this.alerta.showSuccess("Cita cancelada exitosamente", "Hecho");
        this.adoptanteService.getAllAppointments().subscribe(datos => {
          //console.log(this.medicalRecords);
          this.appointments = datos;
        });
      } else {
        this.alerta.showError("La cita no se canceló", "Error");
      }
    });
  }

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  getType(vari: Date) {
    console.log(typeof vari);
  }

  mostrarProcesos() {
    this.show = false;
  }

  mostrarDatos() {
    this.show = true;
  }
}
