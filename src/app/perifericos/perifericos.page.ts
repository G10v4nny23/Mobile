import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.page.html',
  styleUrls: ['./perifericos.page.scss'],
})
export class PerifericosPage implements OnInit {
  public Periferico1 =[
    {
     nombre:'Cámara para Videoconferencia Logitech MeetUp c Mic Ultra HD 4K',
     precio:'$1.099.995',
     tipo:'Camara',
    },
 ];
 public Periferico2 =[
  {
   nombre:'Mouse Genius DX110',
   precio:'$3.711',
   tipo:'Mouse',
  },
  ];
  public Periferico3 =[
    {
     nombre:'Reposamuñecas Kensington',
     precio:'$11.802',
     tipo:'Reposamuñecas',
    },
    ];


  constructor() { }

  ngOnInit() {
  }

}
