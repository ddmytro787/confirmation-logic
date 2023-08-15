import { Component } from '@angular/core';
import { ConfirmationRequired } from './confirmation-required.decorator';

@Component({
  selector: 'list-with-decorator-confirmation',
  template: `
    <products-list type="decorator" (remove)="onRemove($event)"></products-list>
  `,
})
export class ListWithDecoratorConfirmationComponent {
  @ConfirmationRequired('Are you sure you want to remove {{id}} product?')
  onRemove(name: string) {
    console.log('if confirm is true your logic goes here');
  }
}
