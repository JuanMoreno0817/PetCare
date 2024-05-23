import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { NgbCollapse, NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SinginComponent } from './singin/singin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PsicologoComponent,
    VeterinarioComponent,
    FooterComponent,
    HomeComponent,
    CartaComponent,
    LoginComponent,
    GalleryComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapse,
    NgbDropdown
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
