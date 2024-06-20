import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogsService {
  logsArr : Array<string> = [];
  constructor() { }

  resetLog() {
    this.logsArr = []
  }

  addLog(newLog : string) {
    this.logsArr.unshift(newLog);
    if (this.logsArr.length > 20) {
      this.logsArr.length = 20;
    }
  }
}
