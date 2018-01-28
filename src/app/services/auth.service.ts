import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../appModels/user.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }
  
  authUser(){
    return this.user;
  } 

  login(user: User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

}
