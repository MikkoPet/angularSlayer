import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  private monsterHealth : number = 100;
  private monsterHealthMax : number = 100;

  set MonsterHealth(newMonsterHealth : number) {
    this.monsterHealth = newMonsterHealth;
  }

  get MonsterHealth() {
    return this.monsterHealth;
  }

  get MonsterHealthMax() {
    return this.monsterHealthMax;
  }

  set MonsterHealthMax(newMaxHealth : number) {
    this.monsterHealth = newMaxHealth;
  }
}
