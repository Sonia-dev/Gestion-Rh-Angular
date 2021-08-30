import { authInterceptorProviders } from './../../helpers/auth.interceptor';
import { TokenStorageService } from './../../service/token-storage.service';
import { CongeService } from './../../service/conge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.css']
})
export class DemandecongeComponent implements OnInit {
  currentUser: any;
  congeForm:FormGroup;
  id:number;
  constructor(private router:Router,private token: TokenStorageService,private fb:FormBuilder,private route:ActivatedRoute,private congeServ:CongeService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.username);
this.congeForm=this.fb.group({
  date_debut :[''],
  motif:[''],
  date_fin:[''],
  employee:['']
  

});



}
  

  onSubmit(){
    console.log(this.currentUser);
    this.congeServ.demanderconge(this.congeForm.value,this.currentUser.id).subscribe(
      data=>{
        console.log(data);
      }
    )
    console.log(this.congeForm.value);
    this.router.navigate(['listconge']);

    
 
 }



}
