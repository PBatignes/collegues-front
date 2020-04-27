import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;

  modif:Boolean = false;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  Creer(): void {
    console.log("Création d'un collègue")
  }

  Modifier() {
    this.modif = true;
  }

  Valider() {
    this.modif = false;
    this.message = 'Modifications enregistrees';
    
    //Disparition du message de validation au bout de 2 secondes
    setTimeout(() => {
      this.message = '';
    },2000)
  }

}