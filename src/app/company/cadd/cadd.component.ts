import { Component, OnInit } from '@angular/core';
import { TermsService } from 'src/app/terms.service';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent implements OnInit {
  Company: { id: string; isEdit: boolean; Name: any; }[];
  CompanyName: string;
  constructor(private termsService: TermsService) { }

  ngOnInit() {
    this.termsService.read_Company().subscribe(data => {
 
      this.Company = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['cName']
        };
      })
      console.log(this.Company);
 
    });
   }
  CreateRecord() {
    let record = {};
    record['cName'] = this.CompanyName;
    this.termsService.create_NewCompany(record).then(resp => {

      this.CompanyName = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
}
