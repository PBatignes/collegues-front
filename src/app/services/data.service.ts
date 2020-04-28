import { Injectable } from '@angular/core';
import { listeCollegues } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject  } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})



export class DataService {

  private colCourant = new Subject<Collegue>();

  private cache = new Map();

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]>{
    this.cache = new Map();
    return this.http.get<string[]>(URL_BACKEND + '?nom=' + nom);
  }

  recupererCollegueCourant(): Collegue{
    return collegueMock;
  }

  requestGetCollegue(matricule: string){

    if (this.cache.has(matricule)){ // si collegue déja présent en cache

      this.colCourant.next(this.cache.get(matricule));

    }else{

      this.http.get<Collegue>(URL_BACKEND + matricule).subscribe( collegue => {
        this.cache.set(collegue.matricule, collegue); // add to cache
        this.colCourant.next(collegue);

      }, error => {
        console.log(`Erreur ${error.message}`);
      }

      );
    }
  }

  get collegueCourant() {
    return this.colCourant.asObservable();
  }

}