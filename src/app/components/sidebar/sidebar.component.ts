import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/table-list', title: 'Video',  icon:'video_library', class: '' },
    { path: '/admin/typography', title: 'Immagini',  icon:'photo_library', class: '' },
    { path: '/admin/listautenti', title: 'Gruppi',  icon:'folder', class: '' },
    { path: '/admin/dashboard', title: 'Sequenze',  icon: 'format_list_bulleted', class: '' },
    { path: '/admin/notifications', title: 'Lista errori',  icon:'warning', class: '' },
    { path: '/admin/user-profile', title: 'Impostazioni',  icon:'settings', class: '' },


 /*   { path: '/admin/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/admin/listautenti', title: 'Lista utenti',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' }, */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
