import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';
import {IRepository} from "./models/repositories/irepository";
import {SqlHeroRepo} from "./models/repositories/sql-hero-repo";
import {LsHeroRepo} from "./models/repositories/ls-hero-repo";
import { environment } from 'src/environments/environment';
import { HeroService } from '../hero.service';


const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}
]
@NgModule({
  declarations: [HeroListComponent, HeroesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: "IRepository", useFactory: (heroService: HeroService)=> {
        if(environment.production)
        return new SqlHeroRepo(heroService);
      else
      return new LsHeroRepo(heroService);
    },
    deps: [HeroService]
    }
  ]
})
export class HeroesModule { }
