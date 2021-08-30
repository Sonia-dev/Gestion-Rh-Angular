import { Contrat } from './../Entities/contrat';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService { private baseUrl = 'http://localhost:8080/api/contrat/';
constructor(private http: HttpClient) { }



  
createDepartement(contrat:Contrat): Observable<Contrat> {  
  let s= this.http.post<Contrat>(`${this.baseUrl}`+'ADD',contrat); 
  console.log(s);
  return s;
}  


getcontratList(): Observable<any> {  
  return this.http.get("http://localhost:8080/api/contrat/all");  
}  



}
