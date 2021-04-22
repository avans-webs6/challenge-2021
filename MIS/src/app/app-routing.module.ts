import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleDetailsComponent } from './modules/module-details/module-details.component';
import { ModuleEditComponent } from './modules/module-edit/module-edit.component';
import { ModuleListComponent } from './modules/module-list/module-list.component';

const routes: Routes = [
  { path: '', component: ModuleListComponent },
  { path: 'module/:code', component: ModuleDetailsComponent },
  { path: 'module/:code/edit', component: ModuleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
