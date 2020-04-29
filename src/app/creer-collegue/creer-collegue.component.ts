import { Component, OnInit } from '@angular/core';
import CollegueSaisie from '../models/CollegueSaisie';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  public collegueSaisie: CollegueSaisie = {};
  public submit = false;
  public error = false;
  public photoPre = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  creerCollegue(){
    this.submit = true;

    if (this.collegueSaisie.nom && this.collegueSaisie.prenoms && this.collegueSaisie.dateDeNaissance
      && this.collegueSaisie.photoUrl && this.collegueSaisie.email.length >= 7){

        this.dataService.creerCollegue(this.collegueSaisie).subscribe( () => {}, error => this.error = true);

      }
  }

  previsualiserPhoto(){
    this.photoPre = true;
  }

}
