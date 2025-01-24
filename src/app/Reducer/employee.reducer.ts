import { createReducer, on } from "@ngrx/store";
import { loadEmployeesSuccess, loadEmployeesFailure, addEmployee, updateEmployee } from '../Actions/emplyoee.action';
import { Employee } from '../Modal/employee';

export interface EmployeeState {
  employees: Employee[];
  error: string;
}

const initialState: EmployeeState = {
  employees: [],
  error: ''
};

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployeesSuccess, (state, { employee }) => ({
    ...state,
    employees:  employee // Ensure employee is an array
  })),
  on(loadEmployeesFailure, (state, { error }) => ({
    ...state,
    employees: []
  })),
  on(addEmployee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee]
  })),
  on(updateEmployee, (state, { employee }) => ({
    ...state,
    employees: state.employees.map(emp => 
      emp.id === employee.id ? { ...emp, ...employee } : emp)
  }))
);

