import { Component, input, Input } from '@angular/core';
import { Shofer } from '../shofer';

@Component({
  selector: 'app-vozac',
  imports: [],
  templateUrl: './vozac.html',
  styleUrl: './vozac.css',
})
export class Vozac {
  @Input()
  ime:String="";

  @Input()
  motordzija:Shofer | undefined;

  @Input()
  indeks:Number=0;

  funk(){
    console.log("Me stisna");
  }
}
