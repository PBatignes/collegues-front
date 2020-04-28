import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  col:Collegue = this.dataService.recupererCollegueCourant();
  subCollegue: Subscription;

  modif:Boolean = false;
  message:string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subCollegue = this.dataService.collegueCourant.subscribe( collegue => {
      this.col = collegue;
    }, error => {
      console.log(`Erreur : ${error.message}`);
    });
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

  ngOnDestroy() {
    this.subCollegue.unsubscribe();
  }

}