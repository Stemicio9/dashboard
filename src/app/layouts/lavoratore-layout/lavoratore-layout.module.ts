import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomelaoratoreComponent} from "../../homelaoratore/homelaoratore.component";
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
import {LavoratoreLayoutRoutes} from "./lavoratore-layout.ruting";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LavoratoreLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [HomelaoratoreComponent]
})
export class LavoratoreLayoutModule { }
