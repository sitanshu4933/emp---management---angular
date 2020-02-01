import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  studentName: any;
  studentAge: any;
  studentAddress: any;
  id: any;

  constructor(private Service: PolicyService, private route: ActivatedRoute,private router: Router) {
    
      this.id = this.route.snapshot.params.id;

   }
  ngOnInit() {
    console.log(this.id);
    this.Service.get_Students1(this.id).then(students => {
      const result = students.data();
      this.studentName = result.Name;
      this.studentAge = result.Age;
      this.studentAddress = result.Address;

      console.log(result);
    });
    
  }
  
    EditRecord() {

      let record = {};

      record['Name'] =  this.studentName;
      record['Age'] = this.studentAge;
      record['Address'] = this.studentAddress;

      this.Service.update_Student(this.id, record).then(res => {
        alert('Data Updated Successfuly.')
        this.router.navigate(['/student']);
      })
        .catch(error => {
          console.log(error);
        });;
    }
   
   
}
