import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { GameHandlerService } from './game-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HealthDisplayHandlerService {

  constructor(@Inject(GameHandlerService) private GameHandlerService: GameHandlerService) { };

  updateHealthBarsDisplay() {
    //change value and percentage fill of health bars
  }
}
