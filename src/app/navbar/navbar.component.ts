import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private authService: AuthService, private router: Router) {

   }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logout(){
    this.authService.logout().then(resolve => this.router.navigate(['login']));
  }
}
