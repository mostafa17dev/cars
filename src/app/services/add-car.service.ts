import { AddCar } from './../appModels/addCar.model';
import { Cars } from './../appModels/cars.model';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class AddCarService {
  private basePath = 'cars';
  // private cars: AngularFireList<Cars>;

  constructor(private ngFire: AngularFireModule, private ngfDb: AngularFireDatabase) { }

  saveCar(addCar: AddCar){
    const storageRef = firebase.storage().ref();
    const putCar = storageRef.child(`${this.basePath}/${addCar.file.name}`).put(addCar.file);

    putCar.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        //upload on progress
        addCar.progress = (putCar.snapshot.bytesTransferred / putCar.snapshot.totalBytes) * 100;
      },
      (error) => {
        //upload failed
        console.log(error);
      },

      (): any =>{
        //success        
        addCar.url = putCar.snapshot.downloadURL;
        addCar.name = addCar.file.name;
        this.saveCarData(addCar);
      }
    )
  }

  saveCarData(addCar: AddCar){
   this.ngfDb.list(`${this.basePath}/`).push(addCar);
  }

}