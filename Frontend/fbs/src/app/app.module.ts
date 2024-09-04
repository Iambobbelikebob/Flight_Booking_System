import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu'
import {MatStepperModule} from '@angular/material/stepper'
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import {FlightComponent} from './flight/flight.component';
import { FlightService } from './flight.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormbookComponent } from './formbook/formbook.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { AdloginComponent } from './adlogin/adlogin.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    BookingComponent,
    AdminComponent,
    FlightComponent,
    FormbookComponent,
    RegisterComponent,
     LoginComponent,
     AdloginComponent
    
  ],
  
  imports: [
    BrowserModule,MatIconModule,MatToolbarModule,MatInputModule,MatBadgeModule,MatMenuModule,
    AppRoutingModule,MatFormFieldModule,MatSelectModule,MatProgressSpinnerModule,MatSidenavModule,
    BrowserAnimationsModule,MatButtonModule,MatRadioModule,MatDatepickerModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatTabsModule,
    MatCheckboxModule,MatCardModule,MatDialogModule,MatNativeDateModule,MatAutocompleteModule,MatStepperModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
