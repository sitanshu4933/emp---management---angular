import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from 'src/app/policy.model';
import { PolicyService } from 'src/app/policy.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Policy[];
  students: any;
  constructor(private service: PolicyService,
    private firestore: AngularFirestore) { }

    ngOnInit() {
      var result=[];
      this.service.get_Students().then(students => {
        students.forEach(student => {
          const data = student.data();
          result.push(data);
        });
      })
      this.students=result;
    }
  onEdit(item: Policy) {
    this.service.formData = Object.assign({}, item);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('Students/' + id).delete();
    }
  }
}
