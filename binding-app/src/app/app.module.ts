import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { OddControlComponent } from './odd-control/odd-control.component';
import { EvenControlComponent } from './even-control/even-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    GameControlsComponent,
    OddControlComponent,
    EvenControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
