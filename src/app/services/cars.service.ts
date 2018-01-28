import { Cars } from './../appModels/cars.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class CarsService {
  private uid: string;
  private basePath = 'cars';
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.afAuth.authState.subscribe(auth =>{
      if(auth != null && auth != undefined){
        this.uid = auth.uid;
      }
    })
  }

  getCars(): Observable<Cars[]>{
    // return this.db.list<Cars>('cars').valueChanges();
    return this.db.list('cars').snapshotChanges().map(actions => {
      return actions.map(action => ({$key: action.key, ...action.payload.val()}));
    });
  }

  getCar(key: string){
    return firebase.database().ref('cars/'+ key).once('value')
    .then((snap) => snap.val()) ;
  }

  removeCar(key: string){
    return this.db.list(`${this.basePath}/`).remove(key);
  }

}
