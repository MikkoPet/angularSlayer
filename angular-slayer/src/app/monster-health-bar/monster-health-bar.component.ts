import { Component, inject } from '@angular/core';
import { MonsterDataService } from '../monster-data.service';

@Component({
  selector: 'app-monster-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './monster-health-bar.component.html',
  styleUrl: './monster-health-bar.component.css'
})
export class MonsterHealthBarComponent {
  monster = inject(MonsterDataService);
}
