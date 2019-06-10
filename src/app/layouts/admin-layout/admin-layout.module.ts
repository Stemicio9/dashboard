import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {GestionevideoComponent} from "../../gestionevideo/gestionevideo.component";

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule, MatCardModule
} from '@angular/material';
import {ListaUtentiComponent} from "../../lista-utenti/lista-utenti.component";
import {AggiungiutenteComponent} from "../../aggiungiutente/aggiungiutente.component";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {VgCoreModule} from "videogular2/core";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";
import {VgControlsModule} from "videogular2/controls";
import {DataTableModule} from "angular7-data-table";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ModificasequenzaComponent} from "../../modificasequenza/modificasequenza.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    DataTableModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    DragDropModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    DragDropModule,
    MatCardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GestionevideoComponent,
    ListaUtentiComponent,
    AggiungiutenteComponent,
    ModificasequenzaComponent
  ],

})

export class AdminLayoutModule {}
