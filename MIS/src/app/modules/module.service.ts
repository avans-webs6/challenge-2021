import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import Module from './module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  getMyModules(): Observable<any[]> {
    return this.auth.user.pipe(mergeMap(user => {
        return this.store.collection('modules', ref => ref.where("owner", "==", user.email)).valueChanges();
    }))
  }
  
  getModulesByUserId(userId: string): Observable<any[]> {
      return this.store.collection('modules', ref => ref.where("owner", "==", userId)).valueChanges();
  }

  public modules$ : Observable<Module[]>  ;

  constructor(private store: AngularFirestore, private auth: AuthService) { 

    this.modules$ = this.store.collection('modules').valueChanges({ idField: 'id' }) as Observable<any[]>;

  }

  create(module: any){
      //this.store.collection('modules').add(module);
      this.store.collection("modules").doc(module.code).set(module);
  }

  editModule(code: string, module: any){
      this.store.collection('modules').doc(code).update(module);
      
  }

  getModule(code: string): Observable<Module> {
      return this.store.collection('modules').doc(code).valueChanges({ idField: 'id' }) 
        .pipe(map((data: any) => {
          //Nu hebben we een echte module met bijv de methodes op de klasse! (i.p.v een cast)
          return new Module(data);
        }));
  }

  getModuleOwner(code: string): Observable<any> {
    return this.getModule(code)
      .pipe(mergeMap((module: any) => {
          return this.store.collection('users').doc(module.owner).valueChanges();
      }));
  }

  getModuleOwners(code: string): Observable<any> {
    return this.getModule(code)
      .pipe(mergeMap((module: any) => {

          let owners$ : Observable<any>[] = [];

          //module.owners is een lijst van ownerId's => [1, 5, 2, 10]
          module.owners.forEach((u: any) => {
            owners$.push(this.store.collection('users').doc(u).valueChanges());
          })

          return combineLatest(owners$);
      }));
  }

}