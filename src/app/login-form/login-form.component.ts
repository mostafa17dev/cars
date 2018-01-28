import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  signIn(){
    this.authService.login({email: this.email, password: this.password})
      .then(resolve => this.router.navigate(['cars']))  
      .catch(error => this.errorMessage = error.message);
  }

}
