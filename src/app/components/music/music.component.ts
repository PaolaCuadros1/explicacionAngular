import { Component, OnInit } from '@angular/core'; // Decorador que nos indica que función va a cumplir este archivo
/**
 * Los decoradores se definen con un @.
 * Tienen metadatas, como el selector, templateUrl, styleUrls.
 */
@Component({
  selector: 'app-music', // Cómo se va a llamar nuestro componente.
  templateUrl: './music.component.html', // Cual va a ser el archivo que se va a mostrar cuando mostremos este componente.
  styleUrls: ['./music.component.scss'] // Cual va a ser el archivo de estilos.
})
export class MusicComponent implements OnInit {
  songs = [
    {
      image: '/assets/images/pretender.jpg',
      songName: '/assets/music/FooFightersThePretender',
      title: 'The Pretender',
      author: 'Foo Fighters'
    },
    {
      image: '/assets/images/pretender.jpg',
      songName: '/assets/music/ImagineDragonsOnTopOfTheWorld',
      title: 'On Top Of The World',
      author: 'Imagine Dragonss'
    },
    {
      image: '/assets/images/pretender.jpg',
      songName: '/assets/music/InterpolAllTheRageBackHome',
      title: 'All The Rage Back Home',
      author: 'Interpol'
    },
  ];

  chageSong(songUrl) {
    songUrl = songUrl + '.mp3';
    (new Audio(songUrl)).play();
  }
  constructor() { }

  ngOnInit() {
  }

}
