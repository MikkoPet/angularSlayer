import { Component, inject } from '@angular/core';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-easy-mon-button',
  standalone: true,
  imports: [],
  templateUrl: './easy-mon-button.component.html',
  styleUrl: './easy-mon-button.component.css'
})
export class EasyMonButtonComponent {
  game = inject(GameHandlerService);

  startGame() {
    this.game.setDifficulty(50, 5, 10);
    this.game.Adversary = 0;
    this.game.startGame();
  }
}
