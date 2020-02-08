import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CaddComponent } from './cadd/cadd.component';
import { ClistComponent } from './clist/clist.component';
import { CupdateComponent } from './cupdate/cupdate.component';

import { FormsModule } from '@angular/forms';
 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [CaddComponent, ClistComponent, CupdateComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ]
})
export class CompanyModule { }
