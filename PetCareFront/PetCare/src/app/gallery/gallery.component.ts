import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../app/gallery/gallery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartaComponent } from '../../app/carta/carta.component';
import { Pet, Genero, AdoptionStatus, Types } from '../Entities/pet';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { galleryFilterDTO } from './galleryFilter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pets: Pet[] = [];
  namePet: string = '';
  petNotFound: boolean = false;

  filterForm: FormGroup;

  constructor(private galleryServices: GalleryService, private fb: FormBuilder, private activeRouter: ActivatedRoute, private router: Router) {
    this.filterForm = this.fb.group({
      tipo: [null],
      genero: [null],
      ageMin: [null],
      ageMax: [null]
    });
  }

  ngOnInit(): void {
    this.galleryServices.getAllPets().subscribe(datos => {
      this.pets = datos;
    });
  }

  GetFilteredPets(){
    const filters: galleryFilterDTO = this.filterForm.value;

    this.galleryServices.getByFilter(filters).subscribe(pets => {
        this.pets = pets;
        this.petNotFound = pets.length === 0;
      });
  }

  getPetByName() {
    if (this.namePet == "") {
      this.galleryServices.getAllPets().subscribe(datos => {
        this.pets = datos;
      });
    } else {
      this.galleryServices.getPetByNameString(this.namePet).subscribe(datos => {
        if (datos.length > 0) {
          this.pets = datos;
          this.petNotFound = false;
        }
        else {
          this.pets = [];
          this.petNotFound = true;
        }
      });
    }
  }
}
