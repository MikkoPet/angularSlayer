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
    let potency = this.GameHandlerService.defineDamage(3, 10);
    this.GameHandlerService.newMonsterHealth(this.GameHandlerService.MonsterHealth - potency);
    this.MonsterActionService.attack();
  }
  specialAttack() {
    let potency = this.GameHandlerService.defineDamage(10, 20);
    this.GameHandlerService.newMonsterHealth(this.GameHandlerService.MonsterHealth - potency);
    this.MonsterActionService.attack();
  }

  heal() {
    this.GameHandlerService.newPlayerHealth(this.GameHandlerService.PlayerHealth + 10);
    this.MonsterActionService.attack();
  }

  flee() {
    alert("You flee...");
    this.GameHandlerService.gameOver();
  }
}
