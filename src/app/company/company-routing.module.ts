import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaddComponent } from './cadd/cadd.component';
import { CupdateComponent } from './cupdate/cupdate.component';
import { ClistComponent } from './clist/clist.component';

const routes: Routes = [
  {
    path:'cadd',
    component:CaddComponent
  },
  {
    path:'',
    component: ClistComponent
  },
  {
    path:'cupdate/:id',
    component: CupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
