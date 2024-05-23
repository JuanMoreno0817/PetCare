import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  @Input() img: string = '';
  @Input() descripcion: string = '';

  
  ngOnInit(): void {
    // Inicialización usando @Input
    console.log('Imagen:', this.img);
    console.log('Descripcion:', this.descripcion);
  }
}
