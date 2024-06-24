import { Component, inject } from '@angular/core';
import { BossStatsService } from '../boss-stats.service';
import { GameLogsService } from '../game-logs.service';
import { MonsterActionService } from '../monster-action.service';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-banter-button',
  standalone: true,
  imports: [],
  templateUrl: './banter-button.component.html',
  styleUrl: './banter-button.component.css'
})
export class BanterButtonComponent {
  boss = inject(BossStatsService);
  monster = inject(MonsterActionService);
  logs = inject(GameLogsService);
  game = inject(GameHandlerService);

  attack() {
    this.logs.addLog('You give the Queen a witty quip.');
    this.boss.banterAmt++;
    this.game.player.plusCharge();
    if (this.boss.eventChecker()) {
      this.game.gameOver();
      this.game.player.PlayerHealth = 100;
      return alert('Congrats, you won the game!') ;
    }
    if (!this.game.gameOff) {
    this.monster.attack()
    } else {
      this.logs.addLog('The Queen laughs with you.');
    }
  }
}
