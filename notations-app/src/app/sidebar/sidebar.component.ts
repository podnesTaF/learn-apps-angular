import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() activeTabId?: number;
  @Input() tabs: { title: string; id: number }[] = [];
  @Output() onTabChanged = new EventEmitter<{ id?: number }>();

  isInputVisible = false;
  newTab = '';

  getActiveTab() {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  changeTab(id?: number) {
    this.onTabChanged.emit({ id });
  }

  toggleInput() {
    this.isInputVisible = !this.isInputVisible;
  }

  onClick() {
    this.tabs.push({
      title: this.newTab,
      id: this.tabs.length + 1,
    });
    this.isInputVisible = false;
  }

  constructor() {}
  ngOnInit(): void {}
}
