import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autorisation } from '../Entities/autorisation';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {
  private baseUrl = 'http://localhost:8080/aut/v1/';
  constructor(private http: HttpClient) { }

  demanderaut(aut:any,currentuser:string):Observable<any>{
    return this.http.post(`http://localhost:8080/aut/v1/add/${currentuser}`,aut);  

  }

 

  
getdemandeautById(id:number):Observable<Autorisation>{
  return this.http.get<Autorisation>("http://localhost:8080/aut/v1/aut/"+id)
    
} 


updateconge(id:number,autorisation:Autorisation):Observable<Autorisation>{
  return this.http.put<Autorisation>("http://localhost:8080/aut/v1/auts/"+id,autorisation);
}



 
  getautList(): Observable<any> {  
    return this.http.get("http://localhost:8080/aut/v1/auts");  
  }  




}



  

