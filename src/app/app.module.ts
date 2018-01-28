import { MaterialM } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { CarsService } from './services/cars.service';
import { AuthenticationGuard } from './services/authentication-guard.service';
import { AddCarService } from './services/add-car.service';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    NavbarComponent,
    CarsHomeComponent,
    CarDetailComponent,
    AddCarComponent,
    ConfirmDeleteComponent,
  ],
  entryComponents: [
    ConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialM,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService,CarsService,AuthenticationGuard,AddCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
