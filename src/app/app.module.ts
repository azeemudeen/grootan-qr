import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReturnFormComponent } from './return-form/return-form.component';
import { QrHomeComponent } from './qr-home/qr-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReturnFormComponent,
    QrHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
