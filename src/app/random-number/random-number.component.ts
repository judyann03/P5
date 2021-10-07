import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomNumber',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent {


  constructor() {
    for (var x=0; x<6; x++){
      this.rnd.push(Math.floor(Math.random()*46)+1)
    }
  }

  rnd:any = []
  selected:any

  buttonSelect(num: number){
    this.selected = num
  }
}

