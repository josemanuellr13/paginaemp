import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  altura: number = 0
  constructor() { }

  ngOnInit(): void {
    this.altura = window.innerWidth - 24;
  }

}
