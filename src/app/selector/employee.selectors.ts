import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from '../Reducer/employee.reducer';
import { state } from '@angular/animations';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

export const selectAllEmployees = createSelector(selectEmployeeState, (state: EmployeeState) => state.employees);
export const selectAllEmployeesError = createSelector(selectEmployeeState, (state: EmployeeState) =>state.error );
