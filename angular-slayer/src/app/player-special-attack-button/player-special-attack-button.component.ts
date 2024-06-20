import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { GameLogsService } from '../game-logs.service';

@Component({
  selector: 'app-player-special-attack-button',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './player-special-attack-button.component.html',
  styleUrl: './player-special-attack-button.component.css'
})
export class PlayerSpecialAttackButtonComponent {
    gameHandlerService = inject(GameHandlerService);
    monsterActionService = inject(MonsterActionService);
    logs = inject(GameLogsService);

    attack() {
      let potency = this.gameHandlerService.defineDamage(10, 20);
      this.gameHandlerService.MonsterHealth = this.gameHandlerService.MonsterHealth - potency;
      this.gameHandlerService.consumeCharges();
      if(this.gameHandlerService.checkMonsterHealth()) {
        return;
      };
      this.logs.addLog(`Using all your might, you attack the monster for ${potency} damage!!!`)
      this.monsterActionService.attack();
    }
}
