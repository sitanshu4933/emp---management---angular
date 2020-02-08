import { Component, OnInit } from '@angular/core';
import { TermsService } from 'src/app/terms.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cupdate',

  templateUrl: './cupdate.component.html',
  styleUrls: ['./cupdate.component.css']
})
export class CupdateComponent implements OnInit {
  id: any;
  CompanyName: any;
  
  constructor(private Service: TermsService, private route: ActivatedRoute,private router: Router) {
    
      this.id = this.route.snapshot.params.id;

   }
  ngOnInit() {
    console.log(this.id);
    this.Service.getCompany(this.id).then(company=> {
      const result = company.data();
      this.CompanyName = result.cName;
      console.log(result);
    });
    
  }
  
    EditRecord() {

      let record = {};

      record['cName'] =  this.CompanyName;
      this.Service.update_Company(this.id, record).then(res => {
        alert('Data Updated Successfuly.')
        this.router.navigate(['/company']);
      })
        .catch(error => {
          console.log(error);
        });;
    }
  }