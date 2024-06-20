import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLogsService } from '../game-logs.service';

@Component({
  selector: 'app-log-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-display.component.html',
  styleUrl: './log-display.component.css'
})
export class LogDisplayComponent {
  logs = inject(GameLogsService);
}
