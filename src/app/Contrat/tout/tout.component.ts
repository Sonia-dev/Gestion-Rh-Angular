import { Contrat } from 'src/app/Entities/contrat';
import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/service/contrat.service';

@Component({
  selector: 'app-tout',
  templateUrl: './tout.component.html',
  styleUrls: ['./tout.component.css']
})
export class ToutComponent implements OnInit {

  contrats :Contrat[];
  constructor(private contrserv:ContratService) { }

  ngOnInit() {
    this.contratlist();
  }

  contratlist(){
    this.contrserv.getcontratList().subscribe(data=>{
      this.contrats=data;console.log(data);
    });
}}