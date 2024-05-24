import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SinginComponent } from './singin/singin.component';
import { PagenfComponent } from './pagenf/pagenf.component';
import { AdoptanteComponent } from './adoptante/adoptante.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SinginComponent
  },
  {
    path: 'psicologo',
    component: PsicologoComponent
  },
  {
    path: 'adoptante',
    component: AdoptanteComponent
  },
  {
    path: 'veterinario',
    component: VeterinarioComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenfComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
