import { FormGroup } from '@angular/forms';
import { Conge } from '../Entities/conge';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private baseUrl = 'http://localhost:8080/conge/v1/';
  constructor(private http: HttpClient) { }


  demanderconge(conge:any,currentuser:string):Observable<any>{
    return this.http.post(`http://localhost:8080/conge/v1/add/${currentuser}`,conge);  

  }



  
getdemandecongeById(id:number):Observable<Conge>{
  return this.http.get<Conge>("http://localhost:8080/conge/v1/Conges/"+id)
    
} 


updateconge(id:number,Conge:Conge):Observable<Conge>{
  return this.http.put<Conge>("http://localhost:8080/conge/v1/congess/"+id,Conge);
}



 
  getcongeList(): Observable<any> {  
    return this.http.get("http://localhost:8080/conge/v1/conges");  
  }  




}



  

