import { Component, OnInit } from '@angular/core';

interface Link {
  url: string;
  text: string;
}



@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  buscadorActivo : boolean = false
  links : Link[] = [{url: 'https://www.google.com', text: 'Home'}, {url: 'https://www.google.com', text: 'Servicios'}, {url: 'https://www.google.com', text: 'Portfolio'}, {url: 'https://www.google.com', text: 'Sobre nosotros'}, {url: 'https://www.google.com', text: 'Contacto'}, {url: 'https://www.google.com', text: 'Trabaja con nosotros'}]

  constructor() { }

  btnBuscar(){
    if(this.buscadorActivo == true){
      this.buscadorActivo = false
    }else{
      this.buscadorActivo = true
    }
  }
  
  ngOnInit(): void {
  }

}
