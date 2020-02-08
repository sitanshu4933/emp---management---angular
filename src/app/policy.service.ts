import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  getStudents(id: any) {
    throw new Error("Method not implemented.");
  }
  formData: Policy;
  constructor(private firestore: AngularFirestore) { }
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }
 
  update_Student(recordID, record){
    return this.firestore.doc('Students/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
  get_Students() {
    return this.firestore.collection('Students').ref.get();
  }
  get_Students1(id: any) {
    return this.firestore.collection('Students').doc(id).ref.get();
    
  }
}
