import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingScreenComponent } from './components/starting-screen/starting-screen.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragScrollModule} from "ngx-drag-scroll";

@NgModule({
  declarations: [
    AppComponent,
    StartingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
