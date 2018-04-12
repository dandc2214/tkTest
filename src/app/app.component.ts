import { Component } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PreguntaCasillasComponent } from './pregunta-casillas/pregunta-casillas.component';
import { ComponentFactory, ComponentRef } from '@angular/core/src/linker/component_factory';
import { PreguntaDesplegableComponent } from './pregunta-desplegable/pregunta-desplegable.component';
import { PreguntaTextComponent } from './pregunta-text/pregunta-text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [
    PreguntaCasillasComponent,
    PreguntaDesplegableComponent,
    PreguntaTextComponent
  ]
})
export class AppComponent {
  title = 'app';
  componentRef: ComponentRef<any>;

  @ViewChild("questions", { read: ViewContainerRef }) container;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  casillas = 0;
  desplegable = 0;
  texto = 0;

  createPreguntaCasillasComponent() {
    console.log("Creando pregunta tipo casillero");
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PreguntaCasillasComponent);
    this.componentRef = this.container.createComponent(factory);
    this.casillas += 1;
  }

  createPreguntaDesplegableComponent() {
    console.log("Creando pregunta tipo desplegable");
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PreguntaDesplegableComponent);
    this.componentRef = this.container.createComponent(factory);
    this.desplegable += 1;
  }

  createPreguntaTextComponent() {
    console.log("Creando pregunta tipo texto");
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PreguntaTextComponent);
    this.componentRef = this.container.createComponent(factory);
    this.texto += 1;
  }
}
