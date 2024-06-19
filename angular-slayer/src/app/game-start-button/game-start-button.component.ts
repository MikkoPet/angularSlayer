import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-game-start-button',
  standalone: true,
  imports: [],
  templateUrl: './game-start-button.component.html',
  styleUrl: './game-start-button.component.css'
})
export class GameStartButtonComponent {
  hidden : boolean = false;
  gameHandlerService = inject(GameHandlerService);

  startGame() {
    this.hidden = true;
    this.gameHandlerService.resetGame();
  }
}
