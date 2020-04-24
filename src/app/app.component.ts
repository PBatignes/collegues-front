import { Component } from '@angular/core';
import {collegueMock} from '../app/mock/collegues.mock'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';

  collegueExemple = collegueMock;


}
