import { Injectable, Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  constructor(@Inject(GameHandlerService) private GameHandlerService: GameHandlerService) { };

  attack() {
    //attack of monster
  }
}
