import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TermsService } from 'src/app/terms.service';
import { Terms } from 'src/app/terms.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  list: Terms[]; 
  employees: any;
  EmployeeName: string;
  EmployeeAge: number;
  EmployeeAddress: string;
  EmployeeNumber: string;
  EmployeeEmail: any;
  departments: any;
  DepartmentId: any;
  company: any[];
  CompanyId: any;
 
  constructor(private termsService: TermsService , private firestore: AngularFirestore) { }
 
  ngOnInit() {
    this.termsService.read_Employee().subscribe(data => {
 
      this.employees = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          number: e.payload.doc.data()['number'],
          Email: e.payload.doc.data()['Email'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.employees);
 
    })
    {
      this.termsService.get_Department().subscribe(data => {
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
    {
      this.termsService.get_Company().subscribe(data => {
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
  }
 
  CreateRecord() {
    let record = {};
    record['Name'] = this.EmployeeName;
    record['number'] = this.EmployeeNumber;
    record['Email'] = this.EmployeeEmail;
    record['Age'] = this.EmployeeAge;
    record['Address'] = this.EmployeeAddress;
    record['DepartmentId'] = this.DepartmentId;
    record['CompanyId'] = this.CompanyId;
    this.termsService.create_NewEmployee(record).then(resp => {

      this.EmployeeName = "";
      this.EmployeeNumber="";
      this.EmployeeEmail="";
      this.EmployeeAge = undefined;
      this.EmployeeAddress = "";
      this.DepartmentId = "";
      this.CompanyId = " ";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  
}