import { Component, HostBinding, Inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-player-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './player-health-bar.component.html',
  styleUrl: './player-health-bar.component.css',
})
export class PlayerHealthBarComponent {
  displayPercentage : number;
  constructor(@Inject(GameHandlerService) GameHandlerService : GameHandlerService) {
    this.displayPercentage = GameHandlerService.PlayerHealth;
  }

}
