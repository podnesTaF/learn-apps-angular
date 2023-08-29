import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() navigated = new EventEmitter<string>();
  @Input() activePage = 'recipes';

  onNavigate(page: string) {
    this.navigated.emit(page);
  }
}
