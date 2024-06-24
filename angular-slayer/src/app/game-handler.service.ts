import { Injectable, inject } from '@angular/core';
import { GameLogsService } from './game-logs.service';
import { MonsterDataService } from './monster-data.service';
import { PlayerDataService } from './player-data.service';

@Injectable({
  providedIn: 'root'
})
export class GameHandlerService {

  public gameOff : boolean = true;

  gameLogs = inject(GameLogsService);
  player = inject(PlayerDataService);
  monster = inject(MonsterDataService);

  beatenAdversary :{
    name: string;
    dead: boolean;
  } [] = [
    {name: 'Lowly Wolf',
      dead: false, 
    },
    {name: 'Soldier Ghoul',
      dead: false
    },
    {name: 'Demon Captain',
      dead: false
    },
    {name: 'Demon Queen',
      dead: false
    }
  ]

  currentAdversary : number = NaN;
  deathGauge : number = 0;
  activateBoss: boolean = false;

  bossAppearance(){
    alert('The depths of the castle rumble...');
    alert('Thunder hits the ground around you...');
    alert('"You think you can slay my children in all impunity?"');
    alert('You turn around to the source of the voice...');
    alert('Behind you, the Demon Queen has appeared, standing between you and the door...');
    alert('Her eyes are murderous, her blade unsheathed, her hand glows with magic...')
    alert('You cannot run anymore...');
    this.currentAdversary = 3;
  }

  constructor() { }

  set Adversary(opponent : number) {
    this.currentAdversary = opponent;
  }

  defineDamage(min : number, max : number){
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  startGame() {
    this.gameOff = false;
    this.resetGame();
  }

  setDifficulty(health : number, minPotency : number, maxPotency : number) {
    this.monster.MonsterHealthMax = health;
    this.monster.MonsterHealth = health;
    this.monster.MaxPot = maxPotency;
    this.monster.MinPot = minPotency;
  }

  resetGame() {
    this.player.resetCharges(0);
    this.monster.MonsterHealth = this.monster.MonsterHealthMax;
    this.gameLogs.resetLog();
  }
  
  checkPlayerHealth() {
    if (this.player.PlayerHealth <= 0) {
      alert("You've been slain :(")
      this.playerDeath();
    }
  }
  
  playerDeath(){
    this.player.PlayerHealth = 100;
    this.deathGauge = 0;
    this.beatenAdversary.forEach((mon) => mon.dead = false);
    this.activateBoss = false;
    this.gameOver();    
  }
  
  checkMonsterHealth() {
    if (this.monster.MonsterHealth <= 0) {
      alert("You've slain the monster :)")
      this.monster.MonsterHealth = 0;
      this.beatenAdversary[this.currentAdversary].dead = true;
      this.deathGauge++;
      if (this.deathGauge === 3){
        this.bossAppearance();
        this.activateBoss = true;
        this.setDifficulty(500, 10, 25);
        this.resetGame();
      } else if (this.deathGauge === 4) {
        alert('Congrats! You won the game!');
        this.activateBoss = false;
        this.gameOver();
      } else {
      this.gameOver();
      return true;
      }
    }
    return false;
  }
  
  gameOver() {
    this.gameOff = true;
    return;
  }

}
