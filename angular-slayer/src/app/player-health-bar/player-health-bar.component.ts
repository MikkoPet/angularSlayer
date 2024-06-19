import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-player-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './player-health-bar.component.html',
  styleUrl: './player-health-bar.component.css',
})
export class PlayerHealthBarComponent {
  GameHandlerService = inject(GameHandlerService);
}
