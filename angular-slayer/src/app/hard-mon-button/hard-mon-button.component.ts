import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-hard-mon-button',
  standalone: true,
  imports: [],
  templateUrl: './hard-mon-button.component.html',
  styleUrl: './hard-mon-button.component.css'
})
export class HardMonButtonComponent {
  game = inject(GameHandlerService);

  startGame() {
    this.game.setDifficulty(100, 10, 15);
    this.game.Adversary = 2;
    this.game.startGame();
  }
}
