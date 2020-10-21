# AngularDi

Projet de test de l'injection de dépendance dans Angular.

On utilise une interface IRepository avec deux implémentations:

- LsHeroRepository: pour accéder aux données via LocalStorage par exemple quand on est en developpement.
- SqlHeroRepository: pour accéder aux données via SQL (sqlite) par exemple quand on est en production.

A la construction, chaque class ecrit un message dans la console pour le debuggage.

Vu qu'on cherche juste à tester l'injection de dépendance, l'interface repository n'est pas compléte et 
les class d'implémentation utilisent un service qui simule le support de stockage des données (mock).


L'application doit juste afficher la liste des Hero sur une page. C'est tout. 

#### Test:

Lancer l'application avec `ng serve -o` pour constater que c'est le service LsHeroRepo qui sera utilisé.
Lancer l'application avec `ng serve --prod -o` pour constater que c'est le service SqlHeroRepo qui sera utilisé.

Le test pour savoir quel instance du repository utilisé se fait dans un module, (hero-module ou app-module au choix).

---------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
