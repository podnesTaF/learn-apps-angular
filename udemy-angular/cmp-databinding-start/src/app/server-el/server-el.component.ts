import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-el',
  templateUrl: './server-el.component.html',
  styleUrls: ['./server-el.component.css'],
})
export class ServerElComponent implements OnInit {
  @Input() element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
