import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ModuleService } from '../modules/module.service';


@Injectable({
  providedIn: 'root'
})
export class CohortService {

  public cohorts$ : Observable<any[]>  ;

  constructor(private store: AngularFirestore, private moduleService: ModuleService) { 

    this.cohorts$ = this.store.collection('cohorts').valueChanges({ idField: 'id' }) as Observable<any[]>;

  }

  create(cohort: any){
      //this.store.collection('modules').add(module);
      this.store.collection("cohorts").doc(cohort.year).set(cohort);
  }

  editModule(year: string, cohort: any){
      this.store.collection('cohorts').doc(year).update(cohort);
      
  }
  
  getCohort(year: string): any {
      return this.store.collection('cohorts').doc(year)
        .valueChanges({ idField: 'id' }) 
        .pipe(
          mergeMap((cohort: any) => {


            let modules$ : Observable<any>[] = [];

            cohort.modules.forEach((m : string) => {
              modules$.push(this.moduleService.getModule(m));
            })
            
            return combineLatest(modules$).pipe(map( modules => {
              cohort.modules = modules;
              return cohort;
            }));
          }
        ));
  }
}
