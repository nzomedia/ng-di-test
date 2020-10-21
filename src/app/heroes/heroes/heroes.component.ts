import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
    <h3>Heroes</h3>
    <app-hero-list></app-hero-list>
  `,
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
