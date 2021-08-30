import { TokenStorageService } from './../../service/token-storage.service';
import { Conge } from './../../Entities/conge';
import { CongeService } from './../../service/conge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeconge',
  templateUrl: './listeconge.component.html',
  styleUrls: ['./listeconge.component.css']
})
export class ListecongeComponent implements OnInit {
conges:Conge[];
etat:boolean;
id:number;
cong:any;
private roles: string[];
isLoggedIn = false;
showAdminBoard = false;
showModeratorBoard = false;
currentUser: any;
username: string;
  constructor(private congserv:CongeService,private token: TokenStorageService) { }

  ngOnInit() {
    this.getConges();
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  private getConges(){
    this.congserv.getcongeList().subscribe(data => {
      this.conges = data;
      console.log(data);});
      
   }




  }
   