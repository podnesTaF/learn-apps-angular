import { Component } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class ErrorAlertComponent {
  message = 'This is an error message!';
}
