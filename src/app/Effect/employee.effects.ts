// src/app/store/effects/employee.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { EmployeeService } from '../service/employee.service';
import { addEmployee, loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from '../Actions/emplyoee.action';

@Injectable()
export class EmployeeEffects {

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  // Load employees effect
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      mergeMap(() =>
        this.employeeService.getEmployees().pipe(
          map((employee) => loadEmployeesSuccess({ employee })),  // Ensure 'employee' is an array
          catchError((error) => of(loadEmployeesFailure({ error: error.message })))
        )
      )
    )
  );
  
  // Add employee effect (You can add similar effects for add/update if needed)
  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEmployee),  // Listen for the 'addEmployee' action
      mergeMap(({ employee }) =>
        this.employeeService.addEmployee (employee).pipe(  // Call the service to add the employee
          map(() => loadEmployees()),  // Reload employees after adding a new one (or dispatch another success action)
          catchError((error) => of(loadEmployeesFailure({ error: error.message })))  // Dispatch failure with error message
        )
      )
    )
  );
}