import { AutorisationService } from './../../service/autorisation.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { FileservService } from './../../service/fileserv.service';
import { TokenStorageService } from './../../service/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  currentUser: any;
  autForm:FormGroup;
  id:number;
  constructor(private router:Router,private token: TokenStorageService,private fb:FormBuilder,private route:ActivatedRoute,private autserv:AutorisationService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.username);
this.autForm=this.fb.group({

  debut:[,[Validators.required]],
  fin:[,[Validators.required]],
  motif:['',[Validators.required]],
 
 

  

});



}
  

  onSubmit(){
    console.log(this.currentUser);
    this.autserv.demanderaut(this.autForm.value,this.currentUser.id).subscribe(
      data=>{
        console.log(data);
      }
    )
    console.log(this.autForm.value);
    this.router.navigate(['listaut']); 
    

    
 
 }



}
