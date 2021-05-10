import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  public modules$ : Observable<any[]>  ;

  constructor(private store: AngularFirestore) { 

    this.modules$ = this.store.collection('modules').valueChanges({ idField: 'id' }) as Observable<any[]>;

  }

  create(module: any){
      //this.store.collection('modules').add(module);
      this.store.collection("modules").doc(module.code).set(module);
  }

  editModule(code: string, module: any){
      this.store.collection('modules').doc(code).update(module);
      
  }

  getModule(code: string): any {
      return this.store.collection('modules').doc(code).valueChanges({ idField: 'id' }) as Observable<any>;
  }
  
}
