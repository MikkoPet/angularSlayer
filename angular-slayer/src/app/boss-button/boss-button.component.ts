import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-boss-button',
  standalone: true,
  imports: [],
  templateUrl: './boss-button.component.html',
  styleUrl: './boss-button.component.css'
})
export class BossButtonComponent {
  game = inject(GameHandlerService);

  startGame() {
    this.game.setDifficulty(500, 5, 20);
    this.game.Adversary = 3;
    this.game.startGame();
  }
}
