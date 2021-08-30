
import { ContratService } from './../../service/contrat.service';
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrat } from 'src/app/Entities/contrat';
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {

  contratForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private route:ActivatedRoute,private contratser:ContratService) { }

  ngOnInit() {

this.contratForm=this.fb.group({
  type:[''],
  duree:[''],
  date_debut:[],
  date_fin:[],
  salaire:[""],
  fonction:[""]

});



}
  savedep(){

    this.contratser.createDepartement(this.contratForm.value).subscribe(
      data=>{
        console.log(data);
        
       
      }
    ),
    error=>console.log(error);
    
  }

  onSubmit(){
    console.log(this.contratForm.value);
    this.savedep();
 
 }



}
