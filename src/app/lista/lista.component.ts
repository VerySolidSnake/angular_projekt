import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../filmy.service';
import { Filmy } from '../modele/film';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  title = 'Filmy';
  constructor(private fS: FilmyService){}
  filmy: Filmy[];
  ngOnInit(): void{
    this.filmy = this.fS.wyswietlFilmy();
    console.table(this.filmy);
  }
}
