import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './Effect/employee.effects';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { employeeReducer } from './Reducer/employee.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    StoreModule.forRoot({employee: employeeReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    
    EffectsModule.forRoot([EmployeeEffects]),
    HttpClientModule
  ],
  providers: [],
  exports: [EmployeeListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
