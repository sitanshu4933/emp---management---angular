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
  DepartmentName: any;
  constructor(private Service: TermsService, private route: ActivatedRoute,private router: Router) {
    
      this.id = this.route.snapshot.params.id;

   }
  ngOnInit() {
    console.log(this.id);
    this.Service.getDepartment(this.id).then(departments => {
      const result = departments.data();
      this.DepartmentName = result.Name;
      console.log(result);
    });
    
  }
  
    EditRecord() {

      let record = {};

      record['Name'] =  this.DepartmentName;
      this.Service.update_Department(this.id, record).then(res => {
        alert('Data Updated Successfuly.')
        this.router.navigate(['/department']);
      })
        .catch(error => {
          console.log(error);
        });
    }
  
   
}