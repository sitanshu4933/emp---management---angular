import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'employee',
    loadChildren:'./employee/employee.module#EmployeeModule'
  },
  {
    path:'department',
    loadChildren:'./department/department.module#DepartmentModule'
  },
  {
    path:'company',
    loadChildren:'./company/company.module#CompanyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
