import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-mid-mon-button',
  standalone: true,
  imports: [],
  templateUrl: './mid-mon-button.component.html',
  styleUrl: './mid-mon-button.component.css'
})
export class MidMonButtonComponent {
  game = inject(GameHandlerService);

  startGame() {
    this.game.setDifficulty(100, 8, 12);
    this.game.Adversary = 1;
    this.game.startGame();
  }
}
