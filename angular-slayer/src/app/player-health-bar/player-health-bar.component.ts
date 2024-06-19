import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';
import { HealthDisplayHandlerService } from '../health-display-handler.service';

@Component({
  selector: 'app-player-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './player-health-bar.component.html',
  styleUrl: './player-health-bar.component.css',
})
export class PlayerHealthBarComponent {
  healthDisplayService = inject(HealthDisplayHandlerService);
  GameHandlerService = inject(GameHandlerService);
}
