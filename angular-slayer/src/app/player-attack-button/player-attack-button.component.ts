import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';

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
  

  attack() {
    console.log('attack');
    let potency = this.gameHandlerService.defineDamage(3, 10);
    this.gameHandlerService.MonsterHealth = this.gameHandlerService.MonsterHealth - potency;
    this.monsterActionService.attack();
  }
}
