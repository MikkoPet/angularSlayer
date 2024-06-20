import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { GameLogsService } from '../game-logs.service';

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
    logs = inject(GameLogsService);

    attack() {
      this.gameHandlerService.PlayerHealth > 50 ? this.gameHandlerService.PlayerHealth = 100 
      : this.gameHandlerService.PlayerHealth += 50;
      this.gameHandlerService.consumeCharges();
      this.logs.addLog(`Using all your faith, you heal yourself for 50 health!!`)
      this.monsterActionService.attack();
    }
}
