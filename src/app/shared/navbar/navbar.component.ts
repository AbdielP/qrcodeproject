import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <mat-toolbar>
    <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item [routerLink]="['/acceso']" routerLinkActive="router-link-active">
        <mat-icon>qr_code_2</mat-icon>
        <span>QR Accesos</span>
      </button>
      <button mat-menu-item [routerLink]="['/carga']" routerLinkActive="router-link-active">
        <mat-icon>inventory_2</mat-icon>
        <span>QR Carga</span>
      </button>
    </mat-menu>
    <small>Menú</small>
  </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      height: var(--navbar-height);
      background-color: var(--navbar-background)!important;
      border-bottom: 1px solid var(--border-primary-color)!important;
    }
  `
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
