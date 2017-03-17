import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResourceService } from './resource.service';
import { AppStore } from './app.store';

import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FileBasedComponent } from './file-based/file-based.component';
import { BasicsComponent } from './basics/basics.component';
import { TreeComponent } from './tree/tree.component';
import { MyselectComponent } from './myselect/myselect.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';

const appRoutes: Routes = [
    { path: '', component: BasicsComponent },
    { path: 'file-based', component: FileBasedComponent },
    { path: 'advanced', component: AdvancedFeaturesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    FileBasedComponent,
    BasicsComponent,
    TreeComponent,
    MyselectComponent,
    AdvancedFeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ResourceService,
    AppStore
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
