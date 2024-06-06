import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../app/gallery/gallery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartaComponent } from '../../app/carta/carta.component';
import { Pet, Genero, AdoptionStatus } from '../Entities/pet';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  pets: Pet[] = [];
  namePet: string = '';
  petNotFound: boolean = false; 
  constructor(private galleryServices: GalleryService, private activeRouter: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    this.galleryServices.getAllPets().subscribe(datos => {
      this.pets = datos;
    });
  }

  getPetByName(){
    this.galleryServices.getPetByName(this.namePet).subscribe(dato => {
      if(dato){
        this.pets = dato ? [dato] : [];
        this.petNotFound = false;
      }
      else
        this.petNotFound = true;
    });
  }
}
