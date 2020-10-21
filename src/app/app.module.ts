import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesModule} from "./heroes/heroes.module";
import { environment } from 'src/environments/environment';
import { HeroService } from './hero.service';
import { SqlHeroRepo } from './heroes/models/repositories/sql-hero-repo';
import { LsHeroRepo } from './heroes/models/repositories/ls-hero-repo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
