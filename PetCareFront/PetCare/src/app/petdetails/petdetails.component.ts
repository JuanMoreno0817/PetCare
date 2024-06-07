import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery/gallery.service';
import { Pet } from '../Entities/pet';

@Component({
  selector: 'app-petdetails',
  templateUrl: './petdetails.component.html',
  styleUrls: ['./petdetails.component.css']
})
export class PetdetailsComponent implements OnInit{

  pet: Pet | null = null;
  constructor(private galleryServices: GalleryService, private activatedRoute: ActivatedRoute){}

  getPetByName(name: string){
    this.galleryServices.getPetByName(name).subscribe(mascota =>{
      this.pet = mascota;
    });
  }
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['name']) {
        const name = params['name'];
        this.getPetByName(name);
      }
    });
  }
}
