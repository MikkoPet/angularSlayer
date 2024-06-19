import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameHandlerService {

  private playerHealth : number = 100;
  private monsterHealth : number = 100;
  private monsterHealthMax : number = 100;
  public gameOff : boolean = true;

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

  

  startGame() {
    this.gameOff = false;
    this.resetGame();
  }

  resetGame() {
    this.PlayerHealth = 100;
    this.monsterHealth = this.MonsterHealthMax;
  }

  checkPlayerHealth() {
    if (this.playerHealth <= 0) {
      alert("You've been slain :(")
      this.gameOver()
    }
  }

  checkMonsterHealth() {
    if (this.monsterHealth <= 0) {
      alert("You've slain the monster :)")
      this.gameOver();
    }
  }

  gameOver() {
    this.gameOff = true;
    return;
  }

}
