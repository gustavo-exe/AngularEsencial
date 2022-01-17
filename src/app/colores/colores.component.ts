import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})

export class ColoresComponent implements OnInit {

  colorLocal:string = '';

  constructor() { }

  ngOnInit() {
  }

  GenerarRandom():string{
    return Math.floor( Math.random() * 255 ).toString(16);
  }

  ColorHex():string{
    this.colorLocal =  "#"+ this.GenerarRandom()+ this.GenerarRandom()+ this.GenerarRandom();
    return this.colorLocal;
  }

}
