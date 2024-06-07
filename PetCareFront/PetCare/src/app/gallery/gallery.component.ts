import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../app/gallery/gallery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartaComponent } from '../../app/carta/carta.component';
import { Pet, Genero, AdoptionStatus } from '../Entities/pet';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { galleryFilterDTO } from './galleryFilter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  filterForm: FormGroup;
  pets: Pet[] = [];
  namePet: string = '';
  petNotFound: boolean = false;

  constructor(private galleryServices: GalleryService, private fb: FormBuilder, private activeRouter: ActivatedRoute, private router: Router) {
    this.filterForm = this.fb.group({
      edad: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.galleryServices.getAllPets().subscribe(datos => {
      this.pets = datos;
    });
  }

  GetByFilter(form: galleryFilterDTO){
    if (this.filterForm.valid) {
      this.galleryServices.getByFilter(form).subscribe(data => {
        if (data) {

        } else {
        }
      });
    }
  }

  getPetByName() {
    if (this.namePet == "") {
      this.galleryServices.getAllPets().subscribe(datos => {
        this.pets = datos;
      });
    } else {
      this.galleryServices.getPetByName(this.namePet).subscribe(datos => {
        //console.log(datos);
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
