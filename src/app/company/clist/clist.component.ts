import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TermsService } from 'src/app/terms.service';
import { Terms } from 'src/app/terms.model';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {
  company: any;
  list: Terms[];  
  constructor(private service: TermsService,
    private firestore: AngularFirestore) { }
    ngOnInit() {
      this.service.get_Company().subscribe(data => {
        this.company = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['cName'],
          };
        })
        console.log(this.company);
   
      })
    }
  onEdit(id: Terms) {
    this.service.formData = Object.assign({}, id);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('company/' + id).delete();
    }
  }
}