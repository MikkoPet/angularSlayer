import { Injectable, Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { HealthDisplayHandlerService } from './health-display-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  constructor(public GameHandlerService: GameHandlerService,
              public HealthDisplayHandlerService : HealthDisplayHandlerService) { };

  attack() {
    let potency = this.GameHandlerService.defineDamage(8, 10);
    this.GameHandlerService.PlayerHealth = this.GameHandlerService.PlayerHealth - potency;

    this.HealthDisplayHandlerService.updateHealthBarsDisplay();
  }
}
