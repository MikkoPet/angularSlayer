import { Injectable, Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { MonsterActionService } from './monster-action.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerActionService {
 

  constructor(@Inject(GameHandlerService) private GameHandlerService: GameHandlerService, 
              @Inject(MonsterActionService) private MonsterActionService : MonsterActionService) {};


  attack() {
    //attack of monster
    this.MonsterActionService.attack();
  }
  specialAttack() {
    //specialAttack
    this.MonsterActionService.attack();
  }

  heal() {
    //heal
    this.MonsterActionService.attack();
  }

  flee() {
    alert("You flee...");
    this.GameHandlerService.gameOver();
  }
}
