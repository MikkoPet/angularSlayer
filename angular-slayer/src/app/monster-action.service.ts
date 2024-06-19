import { Injectable, inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { HealthDisplayHandlerService } from './health-display-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  gameHandlerService = inject(GameHandlerService);
  healthDisplayService = inject(HealthDisplayHandlerService);

  attack() {
    let potency = this.gameHandlerService.defineDamage(8, 10);
    this.gameHandlerService.PlayerHealth = this.gameHandlerService.PlayerHealth - potency;
    this.gameHandlerService.checkPlayerHealth()
    this.healthDisplayService.updateHealthBarsDisplay();
  }
}
