import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Modal/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiurl="http://localhost:3000/users"

  constructor(private http: HttpClient) { }


    getEmployees(): Observable<Employee[]> {
      console.log('Fetching employees from API...'); // Check when the API is called
      return this.http.get<Employee[]>(this.apiurl);
    
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log('Adding employee to API...', employee);  // Debugging log
    return this.http.post<Employee>(this.apiurl, employee);  // POST request to add a new employee
  }

}
