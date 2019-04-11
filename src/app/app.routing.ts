import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LavoratoreLayoutComponent} from "./layouts/lavoratore-layout/lavoratore-layout.component";
import {DatoreLayoutComponent} from "./layouts/datore-layout/datore-layout.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes =[
 /* {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },  */
  {
    path: '',
    component:LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}, {
    path: 'lavoratore',
    component: LavoratoreLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/lavoratore-layout/lavoratore-layout.module#LavoratoreLayoutModule'
      }]}, {
    path: 'datore',
    component: DatoreLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/datore-layout/datore-layout.module#DatoreLayoutModule'
      }]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
