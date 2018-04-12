import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta-casillas',
  templateUrl: './pregunta-casillas.component.html',
  styleUrls: ['./pregunta-casillas.component.scss']
})
export class PreguntaCasillasComponent implements OnInit {

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
