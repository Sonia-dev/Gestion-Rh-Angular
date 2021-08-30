import { AutorisationService } from 'src/app/service/autorisation.service';
import { TokenStorageService } from './../../service/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Autorisation } from 'src/app/Entities/autorisation';

@Component({
  selector: 'app-showaut',
  templateUrl: './showaut.component.html',
  styleUrls: ['./showaut.component.css']
})
export class ShowautComponent implements OnInit {
  id:number;
  aut:Autorisation;
  isDisplay=true;
  currentUser: any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private activedroute:ActivatedRoute ,private token: TokenStorageService,private router:Router, private autServ:AutorisationService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    //conversion de chaine de caractére en entier 
    this.id=+ this.activedroute.snapshot.paramMap.get('id'); 
    //this.produit=this.products.find(elt=>elt.id==this.id);
    this.autServ.getdemandeautById(this.id).subscribe(data=>{
      this.aut=data;
      console.log(this.aut ,"***********")
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
    this.router.navigate(['/listaut']); }
    

   updateetat(){
     this.autServ.updateconge(this.id,this.aut).subscribe(data=>{
       this.aut=data;
       console.log(this.aut);this.router.navigate(['/listaut']);
       
     })
   }



}
