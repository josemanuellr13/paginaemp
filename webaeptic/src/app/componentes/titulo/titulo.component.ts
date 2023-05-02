import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  @Input() texto = ""
  constructor() { }

  ngOnInit(): void {
  }

}
