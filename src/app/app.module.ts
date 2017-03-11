import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResourceService } from './resource.service';
import { StoreLikeService } from './storeLike.service';

import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { RecursiveTreeComponent } from './recursive-tree/recursive-tree.component';
import { BasicsComponent } from './basics/basics.component';


const appRoutes: Routes = [
    { path: '', component: BasicsComponent },
    { path: 'recursive-tree', component: RecursiveTreeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    RecursiveTreeComponent,
    BasicsComponent
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
    StoreLikeService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
