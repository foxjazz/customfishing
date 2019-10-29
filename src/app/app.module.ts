import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DriverComponent } from './driver/driver.component';
import { SpcontainerComponent } from './spcontainer/spcontainer.component';
import { SprowviewComponent } from './sprowview/sprowview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DriverComponent,
    SpcontainerComponent,
    SprowviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
