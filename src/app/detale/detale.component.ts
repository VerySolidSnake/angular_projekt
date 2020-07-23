import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmyService } from '../filmy.service';
import { Filmy } from '../modele/film';
import { Location} from '@angular/common';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fS: FilmyService, private location: Location) { }
  film: Filmy;
  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.film = this.fS.getFilm(Number(id));
  }
  cofnij(){
    this.location.back();
  }
}
