import { Component, inject } from '@angular/core';
import { HealthDisplayHandlerService } from '../health-display-handler.service';
import { GameHandlerService } from '../game-handler.service';

@Component({
  selector: 'app-monster-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './monster-health-bar.component.html',
  styleUrl: './monster-health-bar.component.css'
})
export class MonsterHealthBarComponent {
  healthDisplayService = inject(HealthDisplayHandlerService);
  gameHandlerService = inject(GameHandlerService);
}
