import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  @Input() img: string = '';
  @Input() nombre: string = '';
  @Input() edad: string = '';
  @Input() raza: string = '';

  
  ngOnInit(): void {
    // Inicialización usando @Input
    console.log('Imagen:', this.img);
    console.log('Nombre:', this.nombre);
    console.log('Edad:', this.edad);
    console.log('Raza:', this.raza);
  }
}
