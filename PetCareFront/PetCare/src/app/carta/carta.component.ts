import { Component, Input, OnInit } from '@angular/core';
import { Genero } from '../Entities/pet';
import { AdoptionStatus } from '../Entities/pet';
import { Types } from '../Entities/pet';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() id: number = 0;
  @Input() img: string = '';
  @Input() Name: string = '';
  @Input() Age: number = 0;
  @Input() Race: string = '';
  @Input() genero: Genero = 0;
  @Input() Status: AdoptionStatus = 0;
  @Input() Description: string = '';
  
  generoEnum = Genero;
  statusEnum = AdoptionStatus;

  ngOnInit(): void {
  }
}
