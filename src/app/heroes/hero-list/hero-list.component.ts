import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../models/hero';
import {HeroService} from "../../hero.service";
import {IRepository} from "../models/repositories/irepository";

@Component({
  selector: 'app-hero-list',
  template: `
     <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `,
  styles: [
  ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(@Inject("IRepository") private heroRepo: IRepository) { 
  }

  ngOnInit(): void {
    console.log(this.heroRepo.constructor);
    this.heroRepo.getAll().subscribe(
      heroe => this.heroes.push(heroe),
      error => console.error("Erreur:", error)
    );
  }

}
