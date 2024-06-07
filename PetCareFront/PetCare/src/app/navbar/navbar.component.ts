import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  log: boolean = false;

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  irAPerfil(){
    
  }

  checkLocalStorage() {
    if (localStorage.getItem('Token')) {
      this.log = true;
    }
    else
      this.log = false;
  }

  logOut(){
    localStorage.clear();
    window.location.href = window.location.origin;
  }

}
