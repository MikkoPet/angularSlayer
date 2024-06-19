import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameHandlerService {

  playerHealth : number = 100;
  monsterHealth : number = 100;

  constructor() { }

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