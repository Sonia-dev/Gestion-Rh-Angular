

import { AppComponent } from './app.component';
import { AddComponent } from './Autorisation/add/add.component';
import { ShowcongeComponent } from './conge/showconge/showconge.component';
import { ListecongeComponent } from './conge/listeconge/listeconge.component';
import { DemandecongeComponent } from './conge/demandeconge/demandeconge.component';

import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AddContratComponent } from './Contrat/add-contrat/add-contrat.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './Employee/detail-employee/detail-employee.component';
import { ListDepartmentsComponent } from './Departement/list-departments/list-departments.component';
import { ListEmployeesComponent } from './Employee/list-employees/list-employees.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { AddDepartementComponent } from './Departement/add-departement/add-departement.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListautComponent } from './Autorisation/listaut/listaut.component';
import { ShowautComponent } from './Autorisation/showaut/showaut.component';
import { ToutComponent } from './contrat/tout/tout.component';

const routes: Routes = [


 
  {path:"",component:AppComponent,children:[
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  {path:"addDepartment",component:AddDepartementComponent},
  {path:"addEmployee",component:AddEmployeeComponent},
  {path:"ListEmployee",component:ListEmployeesComponent},
  {path:"ListDepartment",component:ListDepartmentsComponent},
  {path:"ListEmployee/:id",component:DetailEmployeeComponent},
 {path:"toutC",component:ToutComponent},
  {path:"modifierEmployee/:id",component:UpdateEmployeeComponent},
  {path:"addContrat" , component:AddContratComponent},
  {path:"demandeConge",component:DemandecongeComponent},
  {path:"listconge",component:ListecongeComponent},
 
  
  { path: 'profile', component: ProfileComponent },



  {path:'addaut',component:AddComponent},
  {path:'listaut',component:ListautComponent},
  {path:"listaut/:id",component:ShowautComponent},
{path:'listconge/:id',component:ShowcongeComponent}]},


 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
