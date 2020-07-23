import { Injectable } from '@angular/core';
import { Filmy } from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {
  private filmy: Filmy[] = [
    {id: 0, tytul: 'Titanic', opis: ' film fabularny produkcji amerykańskiej z 1997 roku, oparty na historycznym wydarzeniu – zatonięciu „Titanica” w 1912 roku. Zdobył jedenaście Oscarów (Nagród Amerykańskiej Akademii Filmowej), w tym za najlepszy film.', rok: 1997},
    {id: 1, tytul: 'Terminator', opis: 'erminator (ang. The Terminator) – amerykański film z gatunku science fiction, wyreżyserowany w 1984 roku przez Jamesa Camerona. W Polsce film wyświetlany był w kinach pod tytułem Elektroniczny morderca[1][2]. Nazwa angielska nie ma nic wspólnego z polskim znaczeniem słowa terminator, które oznacza ucznia uczącego się by uzyskać tytuł czeladnika, terminującego u mistrza. W zamyśle piszącego scenariusz oznacza osobę, która doprowadza do kresu (łac. terminus) życia (zabija).', rok: 1984},
    {id: 2, tytul: 'Avatar', opis: 'amerykański film fantastycznonaukowy z 2009 roku. Twórcą, scenarzystą i reżyserem filmu jest James Cameron, który swój poprzedni film fabularny wyreżyserował 12 lat wcześniej. Film został stworzony w technice trójwymiarowej. Światowa premiera odbyła się 18 grudnia 2009, a do polskich kin trafił on 25 grudnia 2009. Avatar był najbardziej dochodowym filmem w historii kina[7], został zdetronizowany dopiero przez film Avengers: Koniec gry (2019).', rok: 2009},
    {id: 3, tytul: 'Avengers', opis: 'Jest on kontynuacją filmów Avengers z 2012 i Avengers: Czas Ultrona z 2015 roku, wchodzi on w skład III Fazy Marvel Cinematic Universe, jest dziewiętnastym obrazem należącym do tej franczyzy. Kolejny film z serii, Avengers: Koniec gry zapowiedziany jest na 2019 rok. Jego światowa premiera miała miejsce 23 kwietnia 2018 roku w Los Angeles, natomiast w Polsce – 26 kwietnia tego samego roku. Film, jako czwarty na świecie, zarobił przeszło 2 miliardy dolarów (przy budżecie 316 milionów).', rok: 2018}
  ];
  constructor() { }
  wyswietlFilmy(): Filmy[]{
    return this.filmy;
  }
  getFilm(id: number): Filmy{
    return this.filmy[id];
  }
}
