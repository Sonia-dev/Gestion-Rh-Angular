import { FileservService } from './../../service/fileserv.service';
import { DepartementService } from '../../service/departement.service';
import { Departement } from '../../Entities/departement';
import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute} from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  dep :Departement =  new Departement();

 
  constructor(private depService:DepartementService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit() {
    
      
  }
  savedep(){
    this.depService.createDepartement(this.dep).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['ListDepartment']);
       
      }
    ),
    error=>console.log(error);
    
  }

  onSubmit(){
    console.log(this.dep);
    this.savedep();
 
 }



}
