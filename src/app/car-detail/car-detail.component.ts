import { Observable } from 'rxjs/Observable';
import { Cars } from './../appModels/cars.model';
import { CarsService } from './../services/cars.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  private car = {};

  constructor(private carsService: CarsService, private router: ActivatedRoute ) { }

  ngOnInit() {
    this.getCar(this.router.snapshot.params['id']);
  }

  getCar(key: string){
    this.carsService.getCar(key)
      .then(car => this.car = car);
  }

}
