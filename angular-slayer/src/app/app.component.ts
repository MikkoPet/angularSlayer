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
import { PlayerSpecialHealComponent } from './player-special-heal/player-special-heal.component';
import { LogDisplayComponent } from './log-display/log-display.component';
import { PlayerDataService } from './player-data.service';
import { EasyMonButtonComponent } from './easy-mon-button/easy-mon-button.component';
import { MidMonButtonComponent } from './mid-mon-button/mid-mon-button.component';
import { HardMonButtonComponent } from './hard-mon-button/hard-mon-button.component';
import { CommonModule } from '@angular/common';
import { BossButtonComponent } from './boss-button/boss-button.component';
import { BanterButtonComponent } from './banter-button/banter-button.component';

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
            EasyMonButtonComponent,
            MidMonButtonComponent,
            HardMonButtonComponent,
            BossButtonComponent,
            BanterButtonComponent,
            LogDisplayComponent,
            CommonModule,
            ],
  providers: [GameHandlerService, MonsterActionService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  gameHandlerService = inject(GameHandlerService);
  player = inject(PlayerDataService);
  title = 'angular-slayer';
}
