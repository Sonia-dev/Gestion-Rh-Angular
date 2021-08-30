import { ContratService } from './../../service/contrat.service';
import { Employee } from '../../Entities/employee';
import { DepartementService } from '../../service/departement.service';
import { EmployeeService } from '../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Departement } from '../../Entities/departement';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  order  :Employee =  new Employee();
  employees:any;
  public userfile:any;
 
  submitted = false; 
 empselected:number;
 departments:Departement;
  id:number;
  f:NgForm;
  constructor( private employeeserv:EmployeeService,private cont:ContratService,private fb:FormBuilder, private router:Router,private depservice:DepartementService) { }

  ngOnInit() {
    this.depservice.getDepartmentList().subscribe(data=>{
      this.departments=data;
      console.log(this.departments);
    })
     

    this. employeeForm =this.fb.group({
      nom_empl:['',[Validators.required]],
      prenom_empl:['',[Validators.required]],
      telephone:['',[Validators.required]],
      departments:[0,[Validators.required]],
     contrat:this.fb.group({
      type:[''],
  duree:[''],
  date_debut:[],
  date_fin:[],
  salaire:[""],
  fonction:[""]
     }),
      date_naissance:['',[Validators.required]],
      date_embauche:['',[Validators.required]],
      situation:['',[Validators.required]],
      lieu_naissance:['',[Validators.required]],
      diplome:['',[Validators.required]],
      email:['',[Validators.required]]

      });
     


    
  }

      

  onSubmit(){

   
    this.employeeserv.createemployee(this.employeeForm.value,this.userfile).subscribe(data=>{

      console.log(data),
      console.log(this.employeeForm.value)
      console.log(this.userfile)
      this.router.navigate(['ListEmployee']);
    } ); 

     
     
  }
  gotoaddcontrat(){
    this.router.navigate(['addContrat']);
  }

  onSelectFile(event:any){
    
    console.log(event.target.value);
    this.userfile=event.target.value;
  }
}
