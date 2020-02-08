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
  emps: any;
  id: any;
  DepartmentName: any;
  DepartmentId: any;

  constructor(private service: TermsService,
    private firestore: AngularFirestore) { }


    ngOnInit() {
      var result = [];
      this.service.get_Employee().then(employees => {
        employees.docs.forEach(employee => {
          const data = employee.data();
          data.id = employee.id;
            this.service.getDepartment(data.DepartmentId).then(department => {
              data.DepartmentName = department.data().Name;

              this.service.getCompany(data.CompanyId).then(company => {
                data.ComanyName = company.data().cName;
                result.push(data);
              })
            })
          })
        });
     
    this.emps = result;
  }
  onEdit(item: Terms) {
    this.service.formData = Object.assign({}, item);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('Employees/' + id).delete();
    }
  }
}