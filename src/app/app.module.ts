import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from '../routing/routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../component/nav/nav.component';
import { PredictComponent } from '../component/predict/predict.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PredictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
