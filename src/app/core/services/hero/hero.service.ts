import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../../hero';
import { HEROES } from '../../../mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // send the message after fetching the heroes
    this.messageService.add(`HeroService: fetched heroes id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

