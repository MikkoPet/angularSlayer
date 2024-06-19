import { Injectable, Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  constructor(@Inject(GameHandlerService) private GameHandlerService: GameHandlerService) { };

  attack() {
    let potency = this.GameHandlerService.defineDamage(8, 15);
    this.GameHandlerService.newPlayerHealth(this.GameHandlerService.PlayerHealth - potency);
    GameHandlerService.roundOver();
  }
}
