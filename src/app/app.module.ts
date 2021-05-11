import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurriculumComponent } from './curriculum/curriculum.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';




@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ScullyLibModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
