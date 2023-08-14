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
          Basic Confirmation
      </button>
      <button mat-raised-button routerLink="/decorator-component">@Decorator in Component Confirmation</button>
      <button mat-raised-button routerLink="/decorator-guard">@Decorator in Guard Confirmation</button>
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
