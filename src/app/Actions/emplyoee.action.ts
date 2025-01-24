import { createAction, props } from "@ngrx/store";
import { Employee } from "../Modal/employee";

// Action for loading employees
export const loadEmployees = createAction('[Employee] Load Employees');

// Action for successful employee loading
export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success', 
  props<{ employee: Employee[] }>()
);

// Action for failed employee loading
export const loadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure', 
  props<{ error: string }>()
);

// Action for adding a new employee
export const addEmployee = createAction(
  '[Employee] Add Employee', 
  props<{ employee: Employee }>()
);

// Action for updating an existing employee
export const updateEmployee = createAction(
  '[Employee] Update Employee', 
  props<{ employee: Employee }>()
);