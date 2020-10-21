import { IRepository } from "./irepository";
import { Observable, of, from } from "rxjs";
import {HeroService} from "../hero.service"
import {Hero} from "../heroes/models/hero";
import { Injectable } from '@angular/core';


export class SqlHeroRepo implements IRepository{


    constructor(private heroService: HeroService){
        console.log("SQL Hero service créé");
    }

    getAll(): Observable<Hero> {
        const heroes: Hero[] = [];
        heroes.push({id: 23, name: "Rokhaya", isSecret: true})
        return from(heroes);
    }
}
