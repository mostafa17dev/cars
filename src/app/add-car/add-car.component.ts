import { AddCar } from './../appModels/addCar.model';
import { Component, OnInit } from '@angular/core';
import { AddCarService } from './../services/add-car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  carImage: File;
  addCar: AddCar;
  car = {};

  constructor(private addCarService: AddCarService, private router: Router) { }

  handleFile(event){
    this.carImage = event.target.files;
  }

  saveCar(){
    this.addCar = new AddCar(this.carImage[0],this.car);
    this.addCarService.saveCar(this.addCar);
    this.router.navigate(['cars']);
  }
 
}
