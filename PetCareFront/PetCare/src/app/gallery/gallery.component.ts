import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../app/gallery/gallery.service';
import { Router } from '@angular/router';
import { CartaComponent } from '../../app/carta/carta.component';
import { Pet, Genero, AdoptionStatus } from '../Entities/pet';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  pets: Pet[] = [];
  constructor(private galleryServices: GalleryService){}
  
  ngOnInit(): void {
    this.galleryServices.getAllPets().subscribe(datos => {
      this.pets = datos;
    });
  }
}
