import { Injectable, inject } from '@angular/core';
import { GameLogsService } from './game-logs.service';
import { PlayerDataComponent } from './player-data/player-data.component';
import { MonsterDataComponent } from './monster-data/monster-data.component';

@Injectable({
  providedIn: 'root'
})
export class GameHandlerService {

  public gameOff : boolean = true;

  gameLogs = inject(GameLogsService);
  player = inject(PlayerDataComponent);
  monster = inject(MonsterDataComponent);

  constructor() { }

  defineDamage(min : number, max : number){
    return Math.floor((Math.random() * max) + min);
  }

  startGame() {
    this.gameOff = false;
    this.resetGame();
  }

  resetGame() {
    this.player.PlayerHealth = 100;
    this.player.resetCharges(0);
    this.monster.MonsterHealth = this.monster.MonsterHealthMax;
    this.gameLogs.resetLog();
  }

  checkPlayerHealth() {
    if (this.player.PlayerHealth <= 0) {
      alert("You've been slain :(")
      this.player.PlayerHealth = 0;
      this.gameOver()
    }
  }

  checkMonsterHealth() {
    if (this.monster.MonsterHealth <= 0) {
      alert("You've slain the monster :)")
      this.gameOver();
      this.monster.MonsterHealth = 0;
      return true;
    }
    return false;
  }

  gameOver() {
    this.gameOff = true;
    return;
  }

}
