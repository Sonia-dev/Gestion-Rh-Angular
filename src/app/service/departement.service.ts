import { Departement } from '../Entities/departement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseUrl = 'http://localhost:8080/api/dep/';
  constructor(private http: HttpClient) { }



    
  createDepartement(departement): Observable<Departement> {  
    let s= this.http.post<Departement>(`${this.baseUrl}`+'new',departement); 
    console.log(s);
    return s;
  }  

  getDepartmentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'departments');  
  }    


  
getDepartmentById(id_dep:number):Observable<Departement>{
  return this.http.get<Departement>("http://localhost:8080/api/dep/department/"+id_dep)
    
} 



}
