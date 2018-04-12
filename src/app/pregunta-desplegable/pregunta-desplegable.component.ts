import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta-desplegable',
  templateUrl: './pregunta-desplegable.component.html',
  styleUrls: ['./pregunta-desplegable.component.scss']
})
export class PreguntaDesplegableComponent implements OnInit {

  title: string;
  options = [];

  constructor() { }

  ngOnInit() {
  }

  removeOption(index){
    this.options.splice(index, 1);
  }

  addOption(value){
    this.options.push(value);
  }

  trackByFn(index: any, item: any) {
    return index;
 }

}
