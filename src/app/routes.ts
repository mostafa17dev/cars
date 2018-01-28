import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AuthenticationGuard } from './services/authentication-guard.service';


export const appRoutes: Routes = [
    {path: 'login', component: LoginFormComponent},
    {path: 'cars', component: CarsHomeComponent, canActivate: [AuthenticationGuard]},
    {path: 'cars/add', component: AddCarComponent, canActivate: [AuthenticationGuard]},
    {path: 'car/:id', component: CarDetailComponent, canActivate: [AuthenticationGuard]},
    // {path: '*', redirectTo:'/login', pathMatch: 'full'}
];