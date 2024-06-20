import { Injectable, inject } from '@angular/core';
import { GameLogsService } from './game-logs.service';

@Injectable({
  providedIn: 'root'
})
export class GameHandlerService {

  private playerHealth : number = 100;
  private monsterHealth : number = 100;
  private monsterHealthMax : number = 100;
  public gameOff : boolean = true;
  private charges : number = 0;

  gameLogs = inject(GameLogsService);

  constructor() { }

  defineDamage(min : number, max : number){
    return Math.floor((Math.random() * max) + min);
  }

  set PlayerHealth(newPlayerHealth : any) {
    this.playerHealth = newPlayerHealth;
  }

  get PlayerHealth() {
    return this.playerHealth;
  }

  set MonsterHealth(newMonsterHealth : any) {
    this.monsterHealth = newMonsterHealth;
  }

  get MonsterHealth() {
    return this.monsterHealth;
  }

  get MonsterHealthMax() {
    return this.monsterHealthMax;
  }

  get Charges() {
    return this.charges;
  }

  plusCharge() {
    this.charges++;
  }

  consumeCharges() {
    this.charges -= 3;
  }

  

  startGame() {
    this.gameOff = false;
    this.resetGame();
  }

  resetGame() {
    this.PlayerHealth = 100;
    this.charges = 0;
    this.monsterHealth = this.MonsterHealthMax;
    this.gameLogs.resetLog();
  }

  checkPlayerHealth() {
    if (this.playerHealth <= 0) {
      alert("You've been slain :(")
      this.PlayerHealth = 0;
      this.gameOver()
    }
  }

  checkMonsterHealth() {
    if (this.monsterHealth <= 0) {
      alert("You've slain the monster :)")
      this.gameOver();
      this.MonsterHealth = 0;
      return true;
    }
    return false;
  }

  gameOver() {
    this.gameOff = true;
    return;
  }

}
