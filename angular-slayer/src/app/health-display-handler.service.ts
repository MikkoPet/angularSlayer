import { Injectable, inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HealthDisplayHandlerService {

  monsterHealthPercentage : number = 100;
  gameHandlerService = inject(GameHandlerService);
  

  updateHealthBarsDisplay() {
    this.monsterHealthPercentage = Math.floor(( this.gameHandlerService.MonsterHealth * 100 ) / this.gameHandlerService.MonsterHealthMax);
  }

  get MonsterHealthPercentage() {
    return this.monsterHealthPercentage;
  }
}
