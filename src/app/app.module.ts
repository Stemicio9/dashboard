import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {LavoratoreLayoutComponent} from "./layouts/lavoratore-layout/lavoratore-layout.component";
import {DatoreLayoutComponent} from "./layouts/datore-layout/datore-layout.component";
import {HttpClientModule} from "@angular/common/http";
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { AggiungiutenteComponent } from './aggiungiutente/aggiungiutente.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {DataTableModule} from "angular7-data-table";
import { ModificasequenzaComponent } from './modificasequenza/modificasequenza.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LavoratoreLayoutComponent,
    DatoreLayoutComponent,
    LoginComponent

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
