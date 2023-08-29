import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activePage = 'shopping list';

  onNavigate(page: string) {
    this.activePage = page;
  }
}
