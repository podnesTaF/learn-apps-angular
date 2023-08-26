import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';

@NgModule({
  declarations: [AppComponent, ErrorAlertComponent, SuccessAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
