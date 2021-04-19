import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   
  public texto:String;
  constructor() { }

  ngOnInit(): void {
    this.texto = "Ola tudo bem?"
  }

  clicou() {
    this.texto = "clicou"
  }

}
