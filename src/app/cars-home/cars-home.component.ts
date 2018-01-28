import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { CarsService } from './../services/cars.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cars } from '../appModels/cars.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cars-home',
  templateUrl: './cars-home.component.html',
  styleUrls: ['./cars-home.component.css']
})
export class CarsHomeComponent implements OnInit, OnChanges {
  cars: any[];
  displayedColumns = ['brand', 'country', 'year', 'delete'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  constructor(private carsService: CarsService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(
      cars => {
        this.cars = cars;
        this.dataSource.data = this.cars;
      },
      err => {
      }
    );
  }

  ngOnChanges() {
    this.carsService.getCars().subscribe(
      cars => {
        this.cars = cars;
        this.dataSource.data = this.cars;
      },
      err => {
      }
    );
  }

  confirmDialog(key: string){
    this.dialog.open(ConfirmDeleteComponent)
    .afterClosed()
    .subscribe((result) => {
      if(result === "yes"){
        this.removeCar(key);
      }
    });
  }

  removeCar(key: string){
    this.carsService.removeCar(key);
  }
}

