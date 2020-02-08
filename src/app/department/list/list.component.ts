import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { TermsService } from 'src/app/terms.service';
import { Terms } from 'src/app/terms.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Terms[];  
  departments: any;
  
  constructor(private service: TermsService,
    private firestore: AngularFirestore) { }
    ngOnInit() {
      this.service.get_Department().subscribe(data => {
        this.departments = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
          };
        })
        console.log(this.departments);
   
      })
  }
  onEdit(item: Terms) {
    this.service.formData = Object.assign({}, item);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('Departments/' + id).delete();
    }
  }
}