import { Component, ElementRef, ViewChild } from '@angular/core';
import { SinginService } from './singin.service';
import { AlertasService } from '../alertas/alertas.service';
import { Adopter } from '../Entities/adopter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  @ViewChild('identification') identification!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('lastname') lastname!: ElementRef;
  @ViewChild('cellphone') cellphone!: ElementRef;
  @ViewChild('address') address!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  @ViewChild('borndate') borndate!: ElementRef;
  @ViewChild('userType') userType!: ElementRef;
  @ViewChild('ocupation') ocupation!: ElementRef;
  @ViewChild('houseType') houseType!: ElementRef;
  @ViewChild('moneyIncome') moneyIncome!: ElementRef;

  constructor(private singinService: SinginService, private alerta: AlertasService, private router: Router) { }

  postAdopter(){
    let adopter: Adopter = {
      identification: this.identification.nativeElement.value,
      name: this.name.nativeElement.value,
      lastname: this.lastname.nativeElement.value,
      cellphone: this.cellphone.nativeElement.value,
      address: this.address.nativeElement.value,
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value,
      borndate: this.borndate.nativeElement.value,
      userType: 1,
      ocupation: this.ocupation.nativeElement.value,
      houseType: Number(this.houseType.nativeElement.value),
      moneyIncome: this.moneyIncome.nativeElement.value
    }
    console.log(adopter);
    this.singinService.postAdopter(adopter).subscribe(datos => {
      //console.log(this.medicalRecords);
      if (datos) {
        this.alerta.showSuccess("Historial clínico agregado exitosamente", "Hecho");
        this.router.navigate(['login']);
      } else {
        this.alerta.showError("El historial no se agregó", "Error");
        window.location.reload();
      }
    });
  }

}
