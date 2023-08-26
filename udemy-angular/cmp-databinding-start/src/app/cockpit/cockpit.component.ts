import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverData: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverData: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  ngOnInit(): void {}
}
