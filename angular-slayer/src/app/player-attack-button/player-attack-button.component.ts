import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';
import { GameLogsService } from '../game-logs.service';
import { MonsterDataService } from '../monster-data.service';
import { PlayerDataService } from '../player-data.service';
import { BossStatsService } from '../boss-stats.service';

@Component({
  selector: 'app-player-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './player-attack-button.component.html',
  styleUrl: './player-attack-button.component.css'
})
export class PlayerAttackButtonComponent {
  gameHandlerService = inject(GameHandlerService);
  monsterActionService = inject(MonsterActionService);
  monster = inject(MonsterDataService);
  player = inject(PlayerDataService);
  logs = inject(GameLogsService);
  boss = inject(BossStatsService);
  
  attack() {
    let potency = this.gameHandlerService.defineDamage(3, 10);
    let currentMon = this.gameHandlerService.currentAdversary;
    let monster = this.gameHandlerService.beatenAdversary[currentMon].name;
    this.monster.MonsterHealth = this.monster.MonsterHealth - potency;
    this.player.plusCharge();
    
        if (this.gameHandlerService.activateBoss) {
          this.boss.attackAmt++;
          if(this.boss.eventChecker()) {
            return;
          };;
        }
    if(this.gameHandlerService.checkMonsterHealth()) {
      return;
    };
    this.logs.addLog(`You attack the ${monster} for ${potency} damage...`)
    this.monsterActionService.attack();
  }
}
