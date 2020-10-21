import {Hero} from "../heroes/models/hero";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';


export interface IRepository {

    getAll(): Observable<Hero>;
}
