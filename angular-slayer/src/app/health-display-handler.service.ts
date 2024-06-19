import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HealthDisplayHandlerService {

  monsterHealthPercentage : number;

  constructor(@Inject(GameHandlerService) private GameHandlerService: GameHandlerService) {
    this.monsterHealthPercentage = Math.floor(( this.GameHandlerService.MonsterHealth * 100 ) / this.GameHandlerService.MonsterHealthMax);
   };

  updateHealthBarsDisplay() {
    this.monsterHealthPercentage = Math.floor(( this.GameHandlerService.MonsterHealth * 100 ) / this.GameHandlerService.MonsterHealthMax);
  }

  get MonsterHealthPercentage() {
    return this.monsterHealthPercentage;
  }
}
