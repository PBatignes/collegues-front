import { Injectable } from '@angular/core';
import { listeCollegues } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor() { }

  rechercherParNom(nom: string): Collegue[]{
    return listeCollegues;
  }

  recupererCollegueCourant(): Collegue{
    return collegueMock;
  }

}