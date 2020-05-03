import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/Photo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})

export class GallerieComponent implements OnInit {

  public photos: Photo[];
  public error = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllPhotos().subscribe(
      data => this.photos = data,
      error => this.error = true
    );
  }
}