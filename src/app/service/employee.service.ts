import { FormGroup } from '@angular/forms';
import { Employee } from '../Entities/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }


  createemployee(employee:any,id:number):Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/add/"+id,employee);  
  }



  
getEmployeeById(id_empl:number):Observable<Employee>{
  return this.http.get<Employee>("http://localhost:8080/api/v1/employees/"+id_empl)
    
} 


updateEmployee(id_empl:number,employee:Employee):Observable<Employee>{
  return this.http.put<Employee>("http://localhost:8080/api/v1/employees/"+id_empl,employee);
}

deleteEmployee(id:number):Observable<Object>{
  return this.http.delete<Employee>("http://localhost:8080/api/v1/"+id);
}



 
  getemployeeList(): Observable<any> {  
    return this.http.get("http://localhost:8080/api/v1/employees");  
  }  



exportPdfList() {  
  return this.http.get<any>("http://localhost:8080/api/v1/employees/export/pdf",{responseType:'arraybuffer' as'json'})

}



  
}
