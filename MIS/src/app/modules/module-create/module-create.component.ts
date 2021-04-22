import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/modules/module.service';

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.scss']
})
export class ModuleCreateComponent implements OnInit {

  public showModal: boolean = false;
  public module: any;

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.module = {};
  }

  create(){
    this.moduleService.create(this.module);   
    this.module = {};
    this.showModal = false;
  }

}
