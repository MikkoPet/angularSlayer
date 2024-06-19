import { Injectable, Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { HealthDisplayHandlerService } from './health-display-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  constructor(@Inject(GameHandlerService) private GameHandlerService: GameHandlerService,
              @Inject(HealthDisplayHandlerService) private HealthDisplayHandlerService : HealthDisplayHandlerService) { };

  attack() {
    let potency = this.GameHandlerService.defineDamage(8, 15);
    this.GameHandlerService.newPlayerHealth(this.GameHandlerService.PlayerHealth - potency);
    this.HealthDisplayHandlerService.updateHealthBarsDisplay();
  }
}
