import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit, OnDestroy {

  private subModeCreation: Subscription;
  public creation = true;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.activerCreation();
    this.subModeCreation = this.dataService.modeCrea.subscribe( bool => {
      this.creation = bool;
    }, error => {
      console.log(`Erreur ${error.message}`);
    });
  }

  ngOnDestroy(): void {
    this.subModeCreation.unsubscribe();
  }
}