import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit {

  public module : any;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService) { 
  }

  ngOnInit(): void {
      let code = this.route.snapshot.paramMap.get('code');
      this.module = this.moduleService.getModule(code);
  }

}
