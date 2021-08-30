import { DepartementService } from '../../service/departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from '../../Entities/departement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {
 departements :Departement[];
  constructor(private depserv:DepartementService,private router:Router) { }

  ngOnInit() {
    this.deplist();
  }

  deplist(){
    this.depserv.getDepartmentList().subscribe(data=>{
      this.departements=data;console.log(data);
    });
}

 

}