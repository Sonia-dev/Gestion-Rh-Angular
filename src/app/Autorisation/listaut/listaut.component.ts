import { TokenStorageService } from './../../service/token-storage.service';
import { AutorisationService } from 'src/app/service/autorisation.service';
import { Autorisation } from './../../Entities/autorisation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaut',
  templateUrl: './listaut.component.html',
  styleUrls: ['./listaut.component.css']
})
export class ListautComponent implements OnInit {
  aut:Autorisation[];

  id:number;
  cong:any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  currentUser: any;
  username: string;
  
    constructor(private autserv:AutorisationService,private token: TokenStorageService) { }
  
    ngOnInit() {
      this.getaut();
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
    private getaut(){
      this.autserv.getautList().subscribe(data => {
        this.aut = data;
        console.log(data);});
        
     }
  
  
  
    }
     