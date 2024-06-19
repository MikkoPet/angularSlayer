import { Component, Inject } from '@angular/core';
import { PlayerActionService } from '../player-action.service';

@Component({
  selector: 'app-player-heal-button',
  standalone: true,
  imports: [],
  templateUrl: './player-heal-button.component.html',
  styleUrl: './player-heal-button.component.css'
})
export class PlayerHealButtonComponent {
  constructor(@Inject(PlayerActionService) private PlayerActionService : PlayerActionService) {
  }

  attack() {
    this.PlayerActionService.heal;
  }
}
