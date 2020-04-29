import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'collegues-front';

  private subCreation: Subscription;

  public creation = false;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.activerCreation();
    this.subCreation = this.dataService.modeCrea.subscribe( bool => {
      this.creation = bool;
    }, error => {
      console.log(`Erreur ${error.message}`);
    });
  }

  ngOnDestroy(): void {
    this.subCreation.unsubscribe();
  }

}
