import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showContent = false;
  clickCounter: any[] = [];

  toggleContent() {
    this.showContent = !this.showContent;
    this.clickCounter.push(new Date().getTime());
  }

  getColor(i: number) {
    return i >= 4 ? 'white' : 'initial';
  }

  getBg(i: number) {
    return i >= 4 ? 'blue' : 'initial';
  }
}
