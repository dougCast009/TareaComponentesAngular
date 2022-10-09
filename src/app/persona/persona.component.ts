import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  hobbies: any[] = ['Salir en Bicicleta', 'Jugar Play', 'Hacer Ejercicio', 'Ver Netflix'];
  edad = 24;

  amuentarEdad(){
    this.edad = this.edad + 1;
  }

  restarEdad(){
    this.edad = this.edad - 1;
  }
  constructor() { }

  ngOnInit(): void {
    this.hobbies;
  }

}
