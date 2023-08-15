import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navigation-container">
      <button
          mat-raised-button routerLink="/regular-confirmation"
          routerLinkActive="active"
          #basic="routerLinkActive"
          [color]="basic.isActive ? 'primary' : ''">
          Regular Confirmation
      </button>
      <button
          mat-raised-button
          routerLink="/reactive-confirmation"
          routerLinkActive="active"
          #reactive="routerLinkActive"
          [color]="reactive.isActive ? 'primary' : ''">
          Reactive Confirmation
      </button>
      <button
          mat-raised-button
          routerLink="/decorator-confirmation"
          routerLinkActive="active"
          #decorator="routerLinkActive"
          [color]="decorator.isActive ? 'primary' : ''">
          Decorator Confirmation
      </button>
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
