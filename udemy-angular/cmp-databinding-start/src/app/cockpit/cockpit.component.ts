import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverData: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverData: string;
    serverContent: string;
  }>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef<{
    value: string;
  }>;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverData: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverData: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  ngOnInit(): void {}
}
