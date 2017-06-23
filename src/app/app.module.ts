import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routerConfig} from "router.config";
import {RouterModule} from "@angular/router";
import { CivilEngineeringComponent } from './civil-engineering/civil-engineering.component';
import { BuildingConstructionComponent } from './building-construction/building-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CivilEngineeringComponent,
    BuildingConstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
