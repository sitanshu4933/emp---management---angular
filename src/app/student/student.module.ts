import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CreateComponent, ListComponent, UpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
