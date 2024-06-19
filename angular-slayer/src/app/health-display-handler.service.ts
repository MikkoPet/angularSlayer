import { Injectable, inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HealthDisplayHandlerService {

  monsterHealthPercentage : number = 100;
  monsterBgGradInputStart : string = "'linear-gradient(to left, rgb(204, 25, 64) ";
  monsterBgGradInputEnd : string = ", black ";
  
  playerBgGradInputStart : string = "'linear-gradient(to right, rgb(98, 18, 163) ";
  playerBgGradInputEnd : string = ", black ";
  
  gameHandlerService = inject(GameHandlerService);
  
  monsterBgGradInput : string = this.monsterBgGradInputStart + 100 + this.monsterBgGradInputEnd + 100 +")'";
  playerBgGradInput : string = this.playerBgGradInputStart + 100 + this.playerBgGradInputEnd + 100 +")'";

  updateHealthBarsDisplay() {
    this.monsterHealthPercentage = Math.floor(( this.gameHandlerService.MonsterHealth * 100 ) / this.gameHandlerService.MonsterHealthMax);
    this.monsterBgGradInput = this.monsterBgGradInputStart + this.monsterHealthPercentage + this.monsterBgGradInputEnd + (this.monsterHealthPercentage + 1) +")'";
    this.playerBgGradInput =  this.playerBgGradInputStart + this.gameHandlerService.PlayerHealth + this.playerBgGradInputEnd + (this.gameHandlerService.PlayerHealth + 1) +")'";

  }

  get MonsterHealthPercentage() {
    return this.monsterHealthPercentage;
  }
}
