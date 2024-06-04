import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../app/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  constructor(private galleryServices: GalleryService){}

  ngOnInit(): void {
    this.galleryServices.getAllPets().subscribe(datos => {
      console.log(datos)
    });
  }
}
