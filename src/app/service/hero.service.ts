import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {id: 1, name: 'Batman', superPower: 'Money', address: 'Gotham'},
    {id: 2, name: 'Superman', superPower: 'Flight', address: 'Smallville'},
    {id: 3, name: 'Wonderwoman', superPower: 'Strength', address: 'Island'},
    {id: 4, name: 'Robin', superPower: 'Nothing', address: 'Guestroom'},
    {id: 5, name: 'Flash', superPower: 'Speed', address: 'Basement'},
  ];

  heroes$: BehaviorSubject<Hero[]> =
    new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.heroes$.next(this.heroes);
  }

  get(id: number): Observable<Hero | undefined> {
    id = parseInt(('' + id), 5);
    return of( this.heroes$.value.find( item => item.id === id ) );
  }

  getBySeoName(name: string): Observable<Hero | undefined> {
    return of( this.heroes$.value.find( item => item.name === name ) );
  }
}
