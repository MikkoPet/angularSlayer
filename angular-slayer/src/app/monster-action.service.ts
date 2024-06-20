import { Injectable, inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { HealthDisplayHandlerService } from './health-display-handler.service';
import { GameLogsService } from './game-logs.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  gameHandlerService = inject(GameHandlerService);
  healthDisplayService = inject(HealthDisplayHandlerService);
  logs = inject(GameLogsService);

  attack() {
    let potency = this.gameHandlerService.defineDamage(8, 10);
    this.gameHandlerService.PlayerHealth = this.gameHandlerService.PlayerHealth - potency;
    this.logs.addLog(`The Monster attacks you for ${potency} damage...`)
    this.gameHandlerService.checkPlayerHealth()
    this.healthDisplayService.updateHealthBarsDisplay();
  }
}
