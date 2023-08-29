import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<void>();
  @Output() gameStopped = new EventEmitter<void>();

  onStart() {
    this.gameStarted.emit();
  }

  onStop() {
    this.gameStopped.emit();
  }

  ngOnInit(): void {}
}
