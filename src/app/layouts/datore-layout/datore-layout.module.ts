import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomedatoreComponent} from "../../homedatore/homedatore.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatTooltipModule
} from "@angular/material";
import {DatoreLayoutRoutes} from "./datore-layout.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DatoreLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [HomedatoreComponent]
})
export class DatoreLayoutModule { }
