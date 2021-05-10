import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './modules/module-list/module-list.component';
import { ModuleDetailsComponent } from './modules/module-details/module-details.component';
import { RouterModule } from '@angular/router';
import { ModuleCreateComponent } from './modules/module-create/module-create.component';
import { FormsModule } from '@angular/forms';
import { ModuleEditComponent } from './modules/module-edit/module-edit.component';
import { ModalComponent } from './generic/modal/modal.component';
import { ModuleFormComponent } from './modules/module-form/module-form.component';
import { AngularFireModule,  } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailsComponent,
    ModuleCreateComponent,
    ModuleEditComponent,
    ModalComponent,
    ModuleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
