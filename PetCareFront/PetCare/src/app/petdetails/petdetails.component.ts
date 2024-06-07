import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery/gallery.service';
import { Pet } from '../Entities/pet';
import { Adopter } from '../Entities/adopter';
import { jwtDecode } from 'jwt-decode';
import { PetdetailsService } from './petdetails.service';
import { AdoptionForm } from '../Entities/adoption-form';
import { AlertasService } from '../alertas/alertas.service';

@Component({
  selector: 'app-petdetails',
  templateUrl: './petdetails.component.html',
  styleUrls: ['./petdetails.component.css']
})
export class PetdetailsComponent implements OnInit{

  pet: Pet | null = null;
  adopter: Adopter | null = null;
  adoptionForm?: AdoptionForm;
  postSuccess: boolean = false;
  constructor(private galleryServices: GalleryService, 
              private activatedRoute: ActivatedRoute, 
              private petDetailService:PetdetailsService,
              private alerta: AlertasService){}

  getPetByName(name: string){
    this.galleryServices.getPetByName(name).subscribe(mascota =>{
      this.pet = mascota;
    });
  }

  getUserFromToken(token: string): any {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  adoptedPet() {
    const token = localStorage.getItem('Token');
    if (token !== null) {
      const claims = this.getUserFromToken(token);
      const email = claims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];

      this.petDetailService.getAdopterByEmail(email).subscribe(dato => {
        this.adopter = dato;

        if (this.pet && this.adopter) {
          this.adoptionForm = {
            adopter: this.adopter,
            pet: this.pet
          };
          
          this.petDetailService.createAdoptionForm(this.adoptionForm).subscribe({
            next: datos => {
              this.postSuccess = datos !== null ? false : true;
              if(this.postSuccess === false)
                this.alerta.showSuccess('Solicitud Éxitosa! \n' + datos.idForm,'Hecho');
            },
            error: error => {
              this.alerta.showError(error, 'Error');
            }
          });
        }
      });
    }
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
