import { Component, inject } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-player-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './player-health-bar.component.html',
  styleUrl: './player-health-bar.component.css',
})
export class PlayerHealthBarComponent {
  player = inject(PlayerDataService)
}
