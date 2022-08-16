import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  mobileLinks:boolean = false;
  menuIcon:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateMenuIcon(): void {
    this.mobileLinks =! this.mobileLinks
    this.menuIcon =! this.menuIcon
  }
}
