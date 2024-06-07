import { Component, OnInit } from '@angular/core';
import { AdoptanteService } from './adoptante.services';
import { Adopter } from '../Entities/adopter';

@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent implements OnInit{

  show: boolean = true;
  crud: number = 1;
  adoptante: any = {} ;

  constructor(private adoptanteService: AdoptanteService){}

  ngOnInit(): void {
    this.adoptanteService.getInfo().subscribe(datos =>{
      this.adoptante = datos;
    });
  }

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  getType(vari: Date){
    console.log(typeof vari);
  }

  mostrarProcesos(){
    this.show = false;
  }

  mostrarDatos(){
    this.show = true;
  }
}
