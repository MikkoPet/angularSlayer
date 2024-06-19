import { Component, Inject } from '@angular/core';
import { PlayerActionService } from '../player-action.service';

@Component({
  selector: 'app-player-special-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './player-special-attack-button.component.html',
  styleUrl: './player-special-attack-button.component.css'
})
export class PlayerSpecialAttackButtonComponent {
    constructor(@Inject(PlayerActionService) private PlayerActionService : PlayerActionService) {
    }
  
    attack() {
      this.PlayerActionService.specialAttack;
    }
}
