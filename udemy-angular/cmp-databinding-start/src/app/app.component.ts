import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onServerAdded(serverData: { serverData: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverData,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverData: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverData,
      content: blueprintData.serverContent,
    });
  }
}
