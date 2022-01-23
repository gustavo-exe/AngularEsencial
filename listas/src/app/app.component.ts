import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  libros:Array<any>;

  constructor(){
    this.libros = [
      {id:1,titulo:'El retrato de Dorian Gray', autor:'Oscar Wilde',descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
      {id:2,titulo:'Frankenstein', autor:'Mary Shelley',descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
      {id:3,titulo:'Orgullo y prejuicio', autor:'Jane Austen',descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}
    ]
  }
}
