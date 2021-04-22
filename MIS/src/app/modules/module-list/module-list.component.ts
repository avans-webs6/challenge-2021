import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleService } from 'src/app/modules/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  public modules: any[] = []
  $modules: Observable<any[]>;

  constructor(private moduleService: ModuleService ) { 
    //Je kan er ook voor kiezen om je service public te maken en rechtstreeks van uit het template
    //op de service.modules$ verder te bouwen.
    this.$modules = moduleService.modules$;
    let storage = localStorage.getItem('modules');
    this.modules = JSON.parse(storage) || [];
  }

  ngOnInit(): void {
  }

}
