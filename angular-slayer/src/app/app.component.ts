import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerHealthBarComponent } from './player-health-bar/player-health-bar.component';
import { MonsterHealthBarComponent } from './monster-health-bar/monster-health-bar.component';
import { PlayerAttackButtonComponent } from './player-attack-button/player-attack-button.component';
import { PlayerSpecialAttackButtonComponent } from './player-special-attack-button/player-special-attack-button.component';
import { PlayerHealButtonComponent } from './player-heal-button/player-heal-button.component';
import { PlayerFleeButtonComponent } from './player-flee-button/player-flee-button.component';
import { GameHandlerService } from './game-handler.service';
import { MonsterActionService } from './monster-action.service';
import { GameStartButtonComponent } from './game-start-button/game-start-button.component';
import { PlayerSpecialHealComponent } from './player-special-heal/player-special-heal.component';
import { LogDisplayComponent } from './log-display/log-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            PlayerHealthBarComponent, 
            MonsterHealthBarComponent, 
            PlayerAttackButtonComponent, 
            PlayerSpecialAttackButtonComponent, 
            PlayerHealButtonComponent, 
            PlayerFleeButtonComponent, 
            PlayerSpecialHealComponent,
            GameStartButtonComponent,
            LogDisplayComponent],
  providers: [GameHandlerService, MonsterActionService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  gameHandlerService = inject(GameHandlerService);
  title = 'angular-slayer';
}
