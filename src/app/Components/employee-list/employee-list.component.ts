import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadEmployees } from 'src/app/Actions/emplyoee.action';
import { Employee } from 'src/app/Modal/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private store: Store<{ employee: { employees: Employee[], error: string} }>) {
    this.employees$ = store.pipe(select('employee', 'employees'));
  }

 
  
  ngOnInit(): void {
    this.employees$.subscribe((employees) => {
      console.log('Employees from the store:', employees);  // Log to verify it's an array
    });
  
    this.store.dispatch(loadEmployees());
  }
}
