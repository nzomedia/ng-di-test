import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import {HeroesComponent} from './heroes/heroes/heroes.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/heroes", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
