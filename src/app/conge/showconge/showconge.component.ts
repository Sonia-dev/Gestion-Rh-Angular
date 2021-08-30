import { TokenStorageService } from './../../service/token-storage.service';
import { CongeService } from './../../service/conge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from './../../Entities/conge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showconge',
  templateUrl: './showconge.component.html',
  styleUrls: ['./showconge.component.css']
})
export class ShowcongeComponent implements OnInit {
  id:number;
  conge:Conge;
  isDisplay=true;
  currentUser: any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private activedroute:ActivatedRoute ,private token: TokenStorageService,private router:Router, private congeServ:CongeService) { }

  toggledisplay(){
    this.isDisplay=!this.isDisplay;
  }
  ngOnInit() {
    this.currentUser = this.token.getUser();
    //conversion de chaine de caractére en entier 
    this.id=+ this.activedroute.snapshot.paramMap.get('id'); 
    //this.produit=this.products.find(elt=>elt.id==this.id);
    this.congeServ.getdemandecongeById(this.id).subscribe(data=>{
      this.conge=data;
      console.log(this.conge ,"***********")
    },error=>console.log(error));
  
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }}
    
  back(){
    this.router.navigate(['/listconge']); }
    

   updateetat(){
     this.congeServ.updateconge(this.id,this.conge).subscribe(data=>{
       this.conge=data;
       console.log(this.conge);this.router.navigate(['/listconge']);
       
     })
   }



}
