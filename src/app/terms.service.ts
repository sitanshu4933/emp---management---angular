import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
import { Terms } from './terms.model';
 
@Injectable({
  providedIn: 'root'
})
export class TermsService {
  formData: Terms;
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewEmployee(record) {
    console.log(record);
    return this.firestore.collection('Employees').add(record);
  }
 
  read_Employee() {
    return this.firestore.collection('Employees').snapshotChanges();
  }
 
  update_Employee(recordID,record){
    return this.firestore.doc('Employees/' + recordID).update(record);
  }
  get_Employee() {
    // return this.firestore.collection('Employees').snapshotChanges();
    return this.firestore.collection('Employees').ref.get();
  }
  getEmployee(id: any) {
    return this.firestore.collection('Employees').doc(id).ref.get();
    
  }
  create_NewDepartment(record) {
    return this.firestore.collection('Departments').add(record);
  }
 
  read_Department() {
    return this.firestore.collection('Departments').snapshotChanges();
  }
 
  update_Department(recordID,record){
    return this.firestore.doc('Departments/' + recordID).update(record);
  }
  get_Department() {
    return this.firestore.collection('Departments').snapshotChanges();
  }
  getDepartment(id: any) {
    return this.firestore.collection('Departments').doc(id).ref.get();
  }
  create_NewCompany(record) {
    return this.firestore.collection('Company').add(record);
  }
 
  read_Company() {
    return this.firestore.collection('Company').snapshotChanges();
  }
 
  update_Company(recordID,record){
    return this.firestore.doc('Company/' + recordID).update(record);
  }
  get_Company() {
    return this.firestore.collection('Company').snapshotChanges();
  }
  getCompany(id: any) {
    return this.firestore.collection('Company').doc(id).ref.get();
  }
}