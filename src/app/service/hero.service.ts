import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroList: Hero[] = [
    {id: 1, name: 'Batman', superPower: 'Money', address: 'Gotham'},
    {id: 2, name: 'Superman', superPower: 'Flight', address: 'Smallville'},
    {id: 3, name: 'Wonderwoman', superPower: 'Strength', address: 'Island'},
    {id: 4, name: 'Robin', superPower: 'Nothing', address: 'Guestroom'},
    {id: 5, name: 'Flash', superPower: 'Speed', address: 'Basement'},
  ];

  
  constructor() { }

    getAll(): void {
      this.heroList;
  }

}
