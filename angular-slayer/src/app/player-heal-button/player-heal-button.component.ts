import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';

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

  attack() {
    this.gameHandlerService.PlayerHealth = this.gameHandlerService.PlayerHealth + 10;
    this.gameHandlerService.plusCharge();
    this.monsterActionService.attack();
  }
}
