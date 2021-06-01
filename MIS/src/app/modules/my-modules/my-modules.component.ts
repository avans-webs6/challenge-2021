import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-my-modules',
  templateUrl: './my-modules.component.html',
  styleUrls: ['./my-modules.component.scss']
})
export class MyModulesComponent implements OnInit {

  modules$: Observable<any[]>;

  constructor(private moduleService: ModuleService ) {}

  ngOnInit(): void {

    this.modules$ = this.moduleService.getMyModules();
    
  }
}
