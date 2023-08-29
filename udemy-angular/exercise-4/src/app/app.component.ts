import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;
  interval: any;

  increment() {
    this.counter++;
  }

  getCountArray() {
    return new Array(this.counter);
  }

  onGameStarted() {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
