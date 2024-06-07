import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { LogInDTO } from './login';
import { Router } from '@angular/router';
import { ResponseLogin } from './login.response';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private ApiService: LoginService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    })
  }

  errorStatus: boolean = false;
  errorMsj: any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('Token')){
      this.router.navigate(['gallery']);
    }
  }

  onLogin(form: LogInDTO) {
    if (this.loginForm.valid) {
      this.ApiService.post(form).subscribe(data => {
        let dataResponse: ResponseLogin = data;
        if (dataResponse.status == "ok") {
          localStorage.setItem("Token", dataResponse.response);
          this.router.navigate(['gallery']);
          window.location.reload();
        } else {
          this.errorStatus = true;
          this.errorMsj = dataResponse.response;
        }
      });
    }
  }
}
