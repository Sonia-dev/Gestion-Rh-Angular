import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import {HttpClientModule} from'@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule} from '@angular/forms';
import { AddDepartementComponent } from './Departement/add-departement/add-departement.component';
import { ListEmployeesComponent } from './Employee/list-employees/list-employees.component';
import { ListDepartmentsComponent } from './Departement/list-departments/list-departments.component';
import { DetailEmployeeComponent } from './Employee/detail-employee/detail-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';

import { WebSocketServiceService } from './service/web-socket-service.service';
import { AddContratComponent } from './Contrat/add-contrat/add-contrat.component';
import { DetailContratComponent } from './Contrat/detail-contrat/detail-contrat.component';
import { UpdateContratComponent } from './Contrat/update-contrat/update-contrat.component';
import { LoginComponent } from './login/login.component';
import {NgPipesModule} from 'ngx-pipes';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { DemandecongeComponent } from './conge/demandeconge/demandeconge.component';
import { ListecongeComponent } from './conge/listeconge/listeconge.component';
import { ShowcongeComponent } from './conge/showconge/showconge.component';
import { AddComponent } from './Autorisation/add/add.component';
import { ShowautComponent } from './Autorisation/showaut/showaut.component';
import { ListautComponent } from './Autorisation/listaut/listaut.component';


import { ToutComponent } from './contrat/tout/tout.component';



@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddDepartementComponent,
    ListEmployeesComponent,
    ListDepartmentsComponent,
    DetailEmployeeComponent,
    UpdateEmployeeComponent,

    AddContratComponent,
    DetailContratComponent,
    UpdateContratComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,

    DemandecongeComponent,
    ListecongeComponent,
    ShowcongeComponent,
    AddComponent,
    ShowautComponent,
    ListautComponent,



    ToutComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders,WebSocketServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
