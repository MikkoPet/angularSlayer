import { Injectable, inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';
import { GameLogsService } from './game-logs.service';
import { PlayerDataService } from './player-data.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterActionService {

  gameHandlerService = inject(GameHandlerService);
  player = inject(PlayerDataService);
  logs = inject(GameLogsService);


  attack() {
    let currentMon = this.gameHandlerService.currentAdversary;
    let monster = this.gameHandlerService.beatenAdversary[currentMon].name;
    let potency = this.gameHandlerService.defineDamage(8, 10);
    this.player.PlayerHealth = this.player.PlayerHealth - potency;
    this.logs.addLog(`The ${monster} attacks you for ${potency} damage...`)
    this.gameHandlerService.checkPlayerHealth()
  }
}
