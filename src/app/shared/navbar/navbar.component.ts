import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>dialpad</mat-icon>
          <span>Redial</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>voicemail</mat-icon>
          <span>Check voice mail</span>
        </button>
        <button mat-menu-item>
          <mat-icon>notifications_off</mat-icon>
          <span>Disable alerts</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      height: 35px;
    }
  `
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
