import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { MonsterActionService } from '../monster-action.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

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

    charges : boolean = this.gameHandlerService.Charges >= 3;
  
    attack() {
      let potency = this.gameHandlerService.defineDamage(10, 20);
      this.gameHandlerService.MonsterHealth = this.gameHandlerService.MonsterHealth - potency;
      if(this.gameHandlerService.checkMonsterHealth()) {
        return;
      };
      this.monsterActionService.attack();
    }
}
