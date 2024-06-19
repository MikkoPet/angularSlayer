import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';

@Component({
  selector: 'app-player-special-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './player-special-attack-button.component.html',
  styleUrl: './player-special-attack-button.component.css'
})
export class PlayerSpecialAttackButtonComponent {
    gameHandlerService = inject(GameHandlerService);
    monsterActionService = inject(MonsterActionService);
  
    attack() {
      let potency = this.gameHandlerService.defineDamage(10, 20);
      this.gameHandlerService.MonsterHealth = this.gameHandlerService.MonsterHealth - potency;
      this.gameHandlerService.checkMonsterHealth;
      this.monsterActionService.attack();
    }
}
