import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navigation-container">
      <button
          mat-raised-button routerLink="/"
          routerLinkActive="active"
          #basic="routerLinkActive"
          [color]="basic.isActive ? 'primary' : ''">
          Regular Confirmation
      </button>
      <button mat-raised-button routerLink="/reactive-confirmation">Reactive Confirmation</button>
      <button mat-raised-button routerLink="/decorator-confirmation">Decorator Confirmation</button>
      <button mat-raised-button routerLink="/decorator-guard-confirmation">Decorator Guard Confirmation</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
      `
        .navigation-container {
          display: flex;
          gap: 3px;
          & > * {
            flex: 1;
          }
        }
      `
  ]
})
export class AppComponent {}
