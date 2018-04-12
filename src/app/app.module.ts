import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ViewChild } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PreguntaCasillasComponent } from './pregunta-casillas/pregunta-casillas.component'
import { PreguntaDesplegableComponent } from './pregunta-desplegable/pregunta-desplegable.component'
import { PreguntaTextComponent } from './pregunta-text/pregunta-text.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PreguntaCasillasComponent,
    PreguntaDesplegableComponent,
    PreguntaTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
