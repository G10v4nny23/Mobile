import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/home', icon: 'home' },
    { title: 'Juegos', url: '/lista-juegos', icon: 'play' },
    { title: 'Perifericos', url: '/perifericos', icon: 'game-controller' },
    { title: 'Audio', url: '/audio', icon: 'musical-notes' },
    
  ];
  

  public Contacto = ['Direccion: Av.Calbuco 2049', 'Correo: Dust2@duocuc.cl', 'Numero: 935677707'];

  
  constructor() {

    
  }
}
