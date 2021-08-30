import { WebSocketServiceService } from './../service/web-socket-service.service';
import { TokenStorageService } from './../service/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'GestionEmployeeSpringBootAngular';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard= false;
  showModeratorBoard = false;
  username: string;
  public notifications = 0;

  constructor(private tokenStorageService: TokenStorageService,private webSocketService: WebSocketServiceService) { 

    // Open connection with server socket
    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

  // Subscribe to notification topic
        stompClient.subscribe('/topic/notification', notifications => {

    // Update notifications attribute with the recent messsage sent from the server
            this.notifications = JSON.parse(notifications.body).count;
      
      
        
      
          })
          
    })


  }

  ngOnInit() {
    

    var right_sidebar = $('.js-right-sidebar');
    var sidebar_btn = $('.js-sidebar-btn');
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;
    sidebar_btn.on('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
      right_sidebar.toggleClass("show-sidebar");
    });

    $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      right_sidebar.removeClass("show-sidebar");

    });
 



    try {
      var arrow = $('.js-arrow');
      arrow.each(function () {
        var that = $(this);
        that.on('click', function (e) {
          e.preventDefault();
          that.find(".arrow").toggleClass("up");
          that.toggleClass("open");
          that.parent().find('.js-sub-list').slideToggle("250");
        });
      });
  
    } catch (error) {
      console.log(error);
    }
  
  
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard=this.roles.includes('ROLE_USER')
      this.username = user.username;
    }
  }



  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  



}
