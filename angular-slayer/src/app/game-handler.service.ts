import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameHandlerService {

  private playerHealth : number = 100;
  private monsterHealth : number = 100;
  private monsterHealthMax : number = 100;

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
    //function to remove the start button and instead display attack buttons
    this.resetGame();
  }

  resetGame() {
    //sets all stats (playerHealth, monsterHealth, powerCharges) back to init values
  }

  gameOver() {
    //display game over/game won message
  }

}
