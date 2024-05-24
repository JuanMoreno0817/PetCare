import { Component } from '@angular/core';

@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent {

  show: boolean = false;
  crud: number = 1;

  mostrarProcesos(){
    this.show = false;
  }

  mostrarDatos(){
    this.show = true;
  }
}
