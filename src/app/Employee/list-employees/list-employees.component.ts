import { Router } from '@angular/router';
import { Departement } from '../../Entities/departement';
import { DepartementService } from '../../service/departement.service';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../Entities/employee';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[];
  nom_empl:string;
  id_dep:number;
  p:number;
  constructor(private emplserv:EmployeeService , private depsev:DepartementService,private router:Router) { }

  ngOnInit() {
    this.getEmployees();
  
  
  }
  private getEmployees(){
    this.emplserv.getemployeeList().subscribe(data => {
      this.employees = data;
      console.log(data);});
      
   }

   
  exporterenpdf(){
this.emplserv.exportPdfList().subscribe((responseMessage)=>{
  let file=new Blob([responseMessage],{type:'application/pdf'});
  var fileURL=URL.createObjectURL(file);
  window.open(fileURL);})

}

supprimer(id:number){

  let p = confirm("voulez vous vraiment supprimer cet employee?")
  if(p==true)
  {
  this.emplserv.deleteEmployee(id).subscribe(
    data=>{
      console.log(data)
      this.getEmployees()}
  )
  }

  window.location.reload()
}
private modifier(id:number){
  this.router.navigate(['modifierEmployee',id]) ;
}


Search(){
  if(this.nom_empl==""){
    this.ngOnInit();
  }else{
this.employees=this.employees.filter(res=>{
   return res.departements.nom_dep.toLocaleLowerCase().match(this.nom_empl.toLocaleLowerCase())
   
})}

}
 key:string='nom_empl';
 reverse:boolean=false;

sort(key){
  this.key=key;
  this.reverse=!this.reverse;

}

  }

   

