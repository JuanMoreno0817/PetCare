import { Component } from '@angular/core';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent {

  show: boolean = false;
  crud: number = 1;

  mostrarCitas(){
    this.show = false;
  }

  mostrarDatos(){
    this.show = true;
  }
}
