import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  @Input() descripcion: string = '';
  @Input() img: string = '';

  
  ngOnInit(): void {
    // Inicialización usando @Input
    console.log('Nombre:', this.descripcion);
    console.log('Edad:', this.img);
  }
}
