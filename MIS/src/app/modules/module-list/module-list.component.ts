import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleService } from 'src/app/modules/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  $modules: Observable<any[]>;

  public haan: string;

  @Input()
  public userId: string; 

  constructor(private moduleService: ModuleService ) {}

  ngOnInit(): void {
    if(!this.userId){
      this.haan = "All"
      this.$modules = this.moduleService.modules$;
    }
    else {
      this.haan = "My";
      this.$modules = this.moduleService.getModulesByUserId(this.userId);

    }
  }

}
