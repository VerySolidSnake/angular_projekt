import { Component, OnInit } from '@angular/core';
import { FilmyService } from './filmy.service';
import { Filmy } from './modele/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Film';
  constructor(private fS: FilmyService){}
  filmy: Filmy[];
  ngOnInit(){
    this.filmy = this.fS.wyswietlFilmy();
  }
}
