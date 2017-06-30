import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-civil-engineering',
  templateUrl: './civil-engineering.component.html',
  styleUrls: ['./civil-engineering.component.css']
})
export class CivilEngineeringComponent implements OnInit {
  @Input()
  place: string;

  constructor() { this.place = "";
  }

  input(Adress) {
    this.place = Adress;
  }

  ngOnInit() {

  }

}
