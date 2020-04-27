import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  @Input() rechercheEnCours:boolean = false;
  listeCol = this.dataService.rechercherParNom('temp');
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  Recherche() {
    this.rechercheEnCours = true;
  }

}
