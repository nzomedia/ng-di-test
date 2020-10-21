import { Injectable } from '@angular/core';
import { HEROES } from './heroes/models/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {

   }

   getHeroes(){
     return HEROES;
   }
}
