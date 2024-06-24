import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { GameLogsService } from '../game-logs.service';
import { PlayerDataService } from '../player-data.service';
import { BossStatsService } from '../boss-stats.service';

@Component({
  selector: 'app-player-special-heal-button',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './player-special-heal.component.html',
  styleUrl: './player-special-heal.component.css'
})
export class PlayerSpecialHealComponent {
    gameHandlerService = inject(GameHandlerService);
    monsterActionService = inject(MonsterActionService);
    player = inject(PlayerDataService);
    logs = inject(GameLogsService);
    boss = inject(BossStatsService);

    attack() {
      this.player.PlayerHealth > 50 ? this.player.PlayerHealth = 100 
      : this.player.PlayerHealth += 50;
      this.player.consumeCharges();
      this.logs.addLog(`Using all your faith, you heal yourself for 50 health!!`)
      if (this.gameHandlerService.activateBoss) {
        this.boss.healAmt++;
        if(this.boss.eventChecker()) {
          return;
        };
      }
      this.monsterActionService.attack();
      
    }
}
