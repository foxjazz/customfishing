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
import {DragDropModule} from '@angular/cdk/drag-drop';
import { VerticleComponent } from './verticle/verticle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DriverComponent,
    SpcontainerComponent,
    SprowviewComponent,
    VerticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
