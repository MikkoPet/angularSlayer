import { Component, Inject } from '@angular/core';
import { PlayerActionService } from '../player-action.service';

@Component({
  selector: 'app-player-flee-button',
  standalone: true,
  imports: [],
  templateUrl: './player-flee-button.component.html',
  styleUrl: './player-flee-button.component.css'
})
export class PlayerFleeButtonComponent {
  constructor(@Inject(PlayerActionService) private PlayerActionService : PlayerActionService) {
  }

  attack() {
    this.PlayerActionService.flee;
  }
}
