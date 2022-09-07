import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.page.html',
  styleUrls: ['./lista-juegos.page.scss'],
})
export class ListaJuegosPage implements OnInit {

  public Juego1 =[
    {
     nombre:' Resident Evil',
     precio:'$ 5.423 CLP',
     tipo:' Accion',
    },
 ];
 public Juego2 =[
  {
   nombre:'Ultra Street Fighter IV',
   precio:'$ 3.515 CLP',
   tipo:' Lucha',
  },
  ];
  public Juego3 =[
    {
     nombre:'WWE 2K22 ',
     precio:' $62.898 CLP',
     tipo:'Deporte',
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
