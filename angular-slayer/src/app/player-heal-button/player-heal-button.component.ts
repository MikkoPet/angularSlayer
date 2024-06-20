import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';
import { GameLogsService } from '../game-logs.service';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-player-heal-button',
  standalone: true,
  imports: [],
  templateUrl: './player-heal-button.component.html',
  styleUrl: './player-heal-button.component.css'
})
export class PlayerHealButtonComponent {
  gameHandlerService = inject(GameHandlerService);
  monsterActionService = inject(MonsterActionService);
  player = inject(PlayerDataService);
  logs = inject(GameLogsService);

  attack() {
    this.player.PlayerHealth = this.player.PlayerHealth + 10;
    this.player.plusCharge();
    this.logs.addLog(`You recuperate 10 health through healing magics...`)
    this.monsterActionService.attack();
  }
}
