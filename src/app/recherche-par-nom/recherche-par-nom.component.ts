import { Component, OnInit, Input } from '@angular/core';
import { listeCollegues } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  @Input() rechercheEnCours:boolean = false;
  listeCol = listeCollegues;
  constructor() { }

  ngOnInit(): void {
  }


  Recherche() {
    this.rechercheEnCours = true;
  }

}
