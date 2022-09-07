import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  public Audio1 =[
    {
     nombre:'Atril de Microfono Philco c/Boom Metalico 2 Microfonos',
     precio:'$16.990',
     tipo:'Atril de microfono',
    },
 ];
 public Audio2 =[
  {
   nombre:'Audifono Monster Audio TW14 Blanco True Wireless',
   precio:'$17.990',
   tipo:'Audifonos',
  },
  ];
  public Audio3 =[
    {
     nombre:'Parlantes Gamer Gamenote SK700 RGB 3.5mm USB',
     precio:'$16.731',
     tipo:'Parlantes',
    },
    ];
  constructor() { }

  ngOnInit() {
  }

}
