import { Component, OnInit } from '@angular/core';
import { Pet } from '../Entities/pet';
import { FormAdoptService } from './formadopt.services';

@Component({
  selector: 'app-formadopt',
  templateUrl: './formadopt.component.html',
  styleUrls: ['./formadopt.component.css']
})
export class FormadoptComponent implements OnInit{

  pets: Pet[] = [];
  constructor(private FormAdoptService: FormAdoptService){}

  ngOnInit(): void {
    this.FormAdoptService.getAllPets().subscribe(datos => {
      this.pets = datos;
      //console.log(this.appointments);
    });
  }
}
