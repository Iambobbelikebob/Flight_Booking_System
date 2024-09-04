import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {FlightComponent} from './flight/flight.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { FormbookComponent } from './formbook/formbook.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdloginComponent } from './adlogin/adlogin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'admin',component:AdminComponent},
  {path:'booking',component:BookingComponent},
  {path:'formbook',component:FormbookComponent},
  {path:'flight',component:FlightComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'adlogin',component:AdloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 

  HomeComponent,
  AdminComponent,
  SearchComponent,
  FlightComponent,
 BookingComponent,
FormbookComponent
]