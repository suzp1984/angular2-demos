import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';
import { AppRoutingModule } from './app-routing.module';

import './rxjs-extensions';

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryDataService)
                  ],
    declarations: [ AppComponent,
                    HeroesComponent,
                    HeroDetailComponent,
                    DashboardComponent,
                    HeroSearchComponent],
    providers:    [ HeroService,
                    HeroSearchService],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
