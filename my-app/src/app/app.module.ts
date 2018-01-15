import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TicketService } from './display/ticket.service';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
   DisplayComponent,
   CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
