import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit{

  ngOnInit(): void {
    
  }

  show: boolean = false;

  mostrarHistoriales(){
    this.show = false;
  }

  mostrarDatos(){
    this.show = true;
  }
}
