import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {


  public modules$ : BehaviorSubject<any[]>  ;
  modules: any[]; //ik hou een 'latest' value bij omdat dat makkelijker is. 

  constructor() { 
    this.modules = JSON.parse(localStorage.getItem('modules')) || [];
    this.modules$ = new BehaviorSubject<any[]>(this.modules);
  }

  create(module: any){
      this.modules.push(module);
      this.updateModules(this.modules);
  }

  editModule(code: string, module: any){
      let old = this.modules.find(m => m.code == code);
      let index = this.modules.indexOf(old);
      this.modules[index] = module; //prima voor nu.
      this.updateModules(this.modules);
  }

  getModule(code: string): any {
      return this.modules.find(m => m.code == code);
  }

  //helper
  private updateModules(modules: any[]){
    localStorage.setItem('modules', JSON.stringify(this.modules));
    this.modules$.next(this.modules); //update subject
  }
  
}
