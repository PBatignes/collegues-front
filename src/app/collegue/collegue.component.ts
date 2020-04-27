import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col:Collegue = this.dataService.recupererCollegueCourant();

  modif:Boolean = false;
  message:string;

  constructor(private dataService: DataService) { }

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