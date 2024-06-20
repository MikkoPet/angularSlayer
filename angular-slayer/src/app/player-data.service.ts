import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  private playerHealth : number = 100;
  private charges : number = 0;

  set PlayerHealth(newPlayerHealth : number) {
    this.playerHealth = newPlayerHealth;
  }

  get PlayerHealth() {
    return this.playerHealth;
  }

  get Charges() {
    return this.charges;
  }

  plusCharge() {
    this.charges++;
  }

  consumeCharges() {
    this.charges -= 3;
  }

  resetCharges(val : number) {
    this.charges = val;
  }
}
