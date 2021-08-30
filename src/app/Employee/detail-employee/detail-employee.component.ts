
import { DepartementService } from '../../service/departement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../Entities/employee';
import { Component, OnInit } from '@angular/core';
import { Departement } from '../../Entities/departement';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  id_empl:number;
  departments:Departement;
  employee:Employee;

  constructor(private service:EmployeeService ,private depserv:DepartementService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id_empl=+ this.activatedroute.snapshot.paramMap.get('id'); 
    //this.produit=this.products.find(elt=>elt.id==this.id);
    this.service.getEmployeeById(this.id_empl).subscribe(data=>{
      this.employee=data;
      console.log(this.employee)
    },error=>console.log(error));
  
  
  }
  
  
  private deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(data=>{
      console.log(data);
     
    })
  }
 
  
  }

