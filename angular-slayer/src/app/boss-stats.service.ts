import { Injectable, inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { BossDialogueService } from './boss-dialogue.service';

@Injectable({
  providedIn: 'root'
})
export class BossStatsService {
  game = inject(GameHandlerService);
  dialog = inject(BossDialogueService);

  healAmt : number = 1;
  attackAmt : number = 0;
  banter : boolean = false;
  banterAmt : number = 0;

  eventChecker() {
    if(!this.banter) {
      if( (this.attackAmt/this.healAmt) < 0.25 ) {
        switch (this.healAmt) {
          case 10:
            for(let dialog of this.dialog.coward1) {
              alert(dialog);
            };
            return;

          case 20:
            for(let dialog of this.dialog.coward2) {
              alert(dialog);
            };
            return;

          case 30:
            for(let dialog of this.dialog.cowardEnd) {
              alert(dialog);
            };
            this.game.playerDeath();
            return true;

          default:
            return;
        }
      } else if ( this.attackAmt/this.healAmt < 0.6 ) {
        switch(this.healAmt + this.attackAmt) {
          case 20:
            for(let dialog of this.dialog.fun1) {
              alert(dialog);
            };
            return;
          
          case 40:
            for(let dialog of this.dialog.fun2) {
              alert(dialog);
            };            
            this.game.monster.MonsterHealth = this.game.monster.MonsterHealthMax;
            return;

          case 70:
            for(let dialog of this.dialog.fun3) {
              alert(dialog);
            };            
            this.game.monster.MonsterHealth += 150;
            return;

          case 100:
            for(let dialog of this.dialog.fun4) {
              alert(dialog);
            };            
            this.game.monster.MaxPot = 25;
            this.game.monster.MinPot = 15;
            this.banter = true;
            return;

          default:
            return;
        }
      }
    } else {
      if ( this.game.monster.MonsterHealth <= 0 ) {
        for(let dialog of this.dialog.funQueenDeath) {
          alert(dialog);
        };        
        return true;
      }

      switch(this.banterAmt){
        case 20:
          for(let dialog of this.dialog.banter1) {
            alert(dialog);
          };
          this.game.monster.MaxPot = 20;
          return;

        case 40:
          for(let dialog of this.dialog.banter2) {
            alert(dialog);
          };
          this.game.monster.MaxPot = 15;
          this.game.monster.MinPot = 10;
          return;
        
        case 50:
          for(let dialog of this.dialog.banter3) {
            alert(dialog);
          };
          this.game.monster.MinPot = 8;
          return;
        
        case 55:
          for(let dialog of this.dialog.banter4) {
            alert(dialog);
          };
          this.game.monster.MinPot = 5;
          this.game.monster.MaxPot = 10;
          return;
        
        case 60:
          for(let dialog of this.dialog.banter5) {
            alert(dialog);
          };
          this.game.monster.MinPot = 0;
          return;

        case 70:
          for(let dialog of this.dialog.banter6) {
            alert(dialog);
          };
          this.game.monster.MaxPot = 0;
          return;

        case 100:
          for(let dialog of this.dialog.banterEnd) {
            alert(dialog);
          };
          this.game.gameOff = true;
          return true;

        default:
          return;
      }      
    }  
  }
  
}
