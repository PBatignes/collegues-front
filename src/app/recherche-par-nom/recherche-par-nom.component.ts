import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  rechercheEnCours:boolean = false;
  listeCol: string[];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  Recherche(nom: string) {
    this.dataService.rechercherParNom(nom).subscribe(data => {
      this.listeCol = data;
    }, error => {
      console.log(`erreur : ${error}`);
    });

    this.rechercheEnCours = true;
  }

  afficherCollegue(matricule: string){
    this.dataService.requestGetCollegue(matricule);
  }

}
