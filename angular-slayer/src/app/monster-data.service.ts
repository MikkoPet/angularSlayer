import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  private monsterHealth : number = 100;
  private monsterHealthMax : number = 100;
  private minPotency : number = 8;
  private maxPotency : number = 15;

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
    this.monsterHealthMax = newMaxHealth;
  }

  get MinPot() {
    return this.minPotency;
  }

  set MinPot(newPot : number) {
    this.minPotency = newPot;
  }

  get MaxPot() {
    return this.maxPotency;
  }

  set MaxPot(newPot : number) {
    this.maxPotency = newPot;
  }
}
