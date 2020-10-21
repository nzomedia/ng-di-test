import { IRepository } from "./irepository";
import { Observable, from } from "rxjs";
import {HeroService} from "../hero.service"
import {Hero} from "../heroes/models/hero";


export class LsHeroRepo implements IRepository{

    constructor(private heroService: HeroService){
        console.log("LS Hero service créé");
    }
    getAll(): Observable<Hero>{
        return from(this.heroService.getHeroes());
    }
}
