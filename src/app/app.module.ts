import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/services/in-memory-data/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './features/heroes/heroes.component';
import { HeroDetailComponent } from './features/hero-detail/hero-detail.component';
import { MessagesComponent } from './features/messages/messages.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './features/hero-search/hero-search.component';


const modules = [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: modules,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
