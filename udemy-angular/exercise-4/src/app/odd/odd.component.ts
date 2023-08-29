import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
})
export class OddComponent {
  @Input() currCount: number = 0;
}
