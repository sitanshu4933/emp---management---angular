import { Component, OnInit } from '@angular/core';
import { TermsService } from 'src/app/terms.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  employees: any;
  EmployeeName: string;
  EmployeeAge: number;
  EmployeeAddress: string;
  EmployeeNumber: number;
  EmployeeEmail: any;
  departments: any;
  DepartmentId: any;
  company: { id: string; isEdit: boolean; Name: any; }[];
  CompanyId: any;
  constructor(private Service: TermsService, private route: ActivatedRoute,private router: Router) {
    
      this.id = this.route.snapshot.params.id;

   }
  ngOnInit() {
    console.log(this.id);
    this.Service.getEmployee(this.id).then(employees => {
      const result = employees.data();
      this.EmployeeName = result.Name;
      this.EmployeeNumber = result.number;
      this.EmployeeEmail = result.Email;
      this.EmployeeAge = result.Age;
      this.EmployeeAddress = result.Address;

      console.log(result);
    })
    {
      this.Service.get_Department().subscribe(data => {
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
      this.Service.get_Company().subscribe(data => {
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
  
    EditRecord() {

      let record = {};

      record['Name'] =  this.EmployeeName;
      record['number'] =  this.EmployeeNumber;
      record['Email'] =  this.EmployeeEmail;
      record['Age'] = this.EmployeeAge;
      record['Address'] = this.EmployeeAddress;
      record['DepartmentId'] = this.DepartmentId;
      record['CompanyId'] = this.CompanyId;
      this.Service.update_Employee(this.id, record).then(res => {
        alert('Data Updated Successfuly.')
        this.router.navigate(['/employee']);
      })
        .catch(error => {
          console.log(error);
        });;
    }
   
   
}