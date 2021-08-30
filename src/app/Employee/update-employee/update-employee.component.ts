import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../Entities/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employee;
 
  id:number;
  constructor(private service:EmployeeService,private router:Router, public route:ActivatedRoute) { }

  ngOnInit() {
  
  this.id=this.route.snapshot.params.id;
    this.service.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee ,"***********")
    },error=>console.log(error));}
  
 

  update() { 
  
    console.log(this.employee);
     this.service.updateEmployee(this.id,this.employee).subscribe( data=>
      {
       console.log(data)
  
     this.goToProductList(); 
    }); 
    }



    goToProductList(){
      this.router.navigate(['/ListEmployee']);
    }}
