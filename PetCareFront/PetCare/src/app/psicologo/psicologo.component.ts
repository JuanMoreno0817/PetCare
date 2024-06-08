import { Component, OnInit } from '@angular/core';
import { PsicologoService } from './psicologo.services';
import { Appointment } from '../Entities/appointment';
import { Pshicologist } from '../Entities/pshicologist';
import { Vet } from '../Entities/vet';
import { Pet } from '../Entities/pet';
import { Adopter } from '../Entities/adopter';
import { AlertasService } from '../alertas/alertas.service';
import { AdoptionForm } from '../Entities/adoption-form';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit {

  //INICIALIZADORES
  appointments: Appointment[] = [];
  pshicologists: Pshicologist[] = [];
  pshicologist: Pshicologist | null = null;
  adopters: Adopter[] = [];

  //PARA AGENDAR CITA
  appointment: Appointment | null = null;
  adopter: Adopter | null = null;
  appointmentDate: Date = new Date();

  //PARA ACTUALIZAR CITA
  guid: string = '';
  pet: Pet | null = null;
  adoptionForm: AdoptionForm | null = null;

  constructor(private PsicologoServices: PsicologoService, private alerta: AlertasService) { }

  ngOnInit(): void {
    this.PsicologoServices.getInfo().subscribe(datos => {
      this.pshicologist = datos;
    });
    this.PsicologoServices.getAllAppointments().subscribe(datos => {
      this.appointments = datos;
    });
    this.PsicologoServices.getAllPsichologists().subscribe(datos => {
      this.pshicologists = datos;
    });
    this.PsicologoServices.getAllAdopters().subscribe(datos => {
      this.adopters = datos;
    });
  }

  show: boolean = true;
  crud: number = 1;

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  mostrarCitas() {
    this.show = false;
  }

  mostrarDatos() {
    this.show = true;
  }

  crearCita() {
    if (this.adopter && this.pshicologist && this.appointmentDate) {
      this.appointment = {
        appointmentDate: new Date(this.appointmentDate),
        adopter: this.adopter,
        psichologist: this.pshicologist
      };
      console.log(this.appointment);
      this.PsicologoServices.crearCita(this.appointment).subscribe({
        next: dato => {
          if (dato)
            this.alerta.showSuccess('Creación exitosa', 'Hecho');
        },
        error: error => {
          this.alerta.showError(error, 'Error');
        }
      });
    }
  }

  buscarCita() {
    console.log('THAT IS THE GUID: ', this.guid);
    if (this.guid) {
      this.PsicologoServices.getInfoAppointment(this.guid).subscribe({
        next: dato => {
          if (dato) {
            this.alerta.showSuccess('Busquedad exitosa', 'Hecho');
            this.appointment = dato;
          }
        }, error: error => {
          this.alerta.showError('Error al buscar su cita', 'Error');
        }
      })
    }
  }

  confirmarCita() {
    if (this.appointment && this.appointment.adopter) {
      this.PsicologoServices.getAdoptionForm(this.appointment.adopter?.name).subscribe({
        next: dato => {
          dato.pet.status = 1;
          this.PsicologoServices.confirmarCita(dato.pet).subscribe({
            next: dato => {
              if (dato) {
                this.alerta.showSuccess('Adopción exitosa', 'Hecho');
              }
            }, error: error => {
              this.alerta.showError('Error al confirmar la adopción:', 'Error');
            }
          });
        }, error: error => {
          this.alerta.showError('No se encontró la mascota en el formulario de adopción.', 'Error');
        }
      });
    } else {
      this.alerta.showError('Faltan datos de la cita o la mascota.', 'Error');
    }
  }

  denegarCita(){
    this.alerta.showSuccess('Se denego la adopción','Hecho');
  }
}
