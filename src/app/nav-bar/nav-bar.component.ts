import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  svg = 'menu'

  constructor() { }

  ngOnInit(): void {
  }

  updateMenuIcon(): void {
    this.svg == 'menu' ? this.svg = 'x' : this.svg = 'menu'
  }
}
