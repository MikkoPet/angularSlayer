import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-player-flee-button',
  standalone: true,
  imports: [],
  templateUrl: './player-flee-button.component.html',
  styleUrl: './player-flee-button.component.css'
})
export class PlayerFleeButtonComponent {
  gameHandlerService = inject(GameHandlerService);

  attack() {
    alert("You flee...");
    this.gameHandlerService.gameOver();
  }
}
