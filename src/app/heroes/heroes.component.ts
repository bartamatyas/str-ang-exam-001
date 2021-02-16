import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList = this.heroService.getAllHeroes();
  ngOnInit(): void {
    this.heroService.getAllHeroes()}

  constructor(private heroService: HeroService) { }

}
