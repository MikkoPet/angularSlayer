import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerHealthBarComponent } from './player-health-bar/player-health-bar.component';
import { MonsterHealthBarComponent } from './monster-health-bar/monster-health-bar.component';
import { PlayerAttackButtonComponent } from './player-attack-button/player-attack-button.component';
import { PlayerSpecialAttackButtonComponent } from './player-special-attack-button/player-special-attack-button.component';
import { PlayerHealButtonComponent } from './player-heal-button/player-heal-button.component';
import { PlayerFleeButtonComponent } from './player-flee-button/player-flee-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerHealthBarComponent, MonsterHealthBarComponent, PlayerAttackButtonComponent, PlayerSpecialAttackButtonComponent, PlayerHealButtonComponent, PlayerFleeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-slayer';
}
