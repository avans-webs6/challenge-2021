import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import Module from '../module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.scss']
})
export class ModuleEditComponent implements OnInit {
  
  module$: Observable<Module>;
  code: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moduleService: ModuleService) { 
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code');
    this.module$ = this.moduleService.getModule(this.code);
  }

  save(module: any){
    this.moduleService.editModule(this.code, module);
    //this.router.navigate(['/module', module.code]);
  }

  

}
