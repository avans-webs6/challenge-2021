import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './modules/module-list/module-list.component';
import { ModuleDetailsComponent } from './modules/module-details/module-details.component';
import { RouterModule } from '@angular/router';
import { ModuleCreateComponent } from './modules/module-create/module-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleEditComponent } from './modules/module-edit/module-edit.component';
import { ModalComponent } from './generic/modal/modal.component';
import { ModuleFormComponent } from './modules/module-form/module-form.component';
import { AngularFireModule,  } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment.dev';
import { CohortListComponent } from './cohort/cohort-list/cohort-list.component';
import { CohortEditComponent } from './cohort/cohort-edit/cohort-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailsComponent,
    ModuleCreateComponent,
    ModuleEditComponent,
    ModalComponent,
    ModuleFormComponent,
    CohortListComponent,
    CohortEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
