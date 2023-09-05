import { Component } from '@angular/core';
import { ShoppingService } from './components/shopping-list/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingService],
})
export class AppComponent {
  activePage = 'recipes';

  onNavigate(page: string) {
    this.activePage = page;
    console.log(this.activePage);
  }
}
