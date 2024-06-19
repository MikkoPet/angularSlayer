import { Component, Inject } from '@angular/core';
import { PlayerActionService } from '../player-action.service';

@Component({
  selector: 'app-player-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './player-attack-button.component.html',
  styleUrl: './player-attack-button.component.css'
})
export class PlayerAttackButtonComponent {
  constructor(@Inject(PlayerActionService) private PlayerActionService : PlayerActionService) {
  }

  attack() {
    this.PlayerActionService.attack;
  }
}
