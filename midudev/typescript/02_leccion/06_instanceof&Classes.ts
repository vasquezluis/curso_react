// tipar una clase

import { type IAvenger } from "./types.d";

class Avenger implements IAvenger {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;

  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  battle(enemy, win) {
    if (win) {
      this.wonBattles++;
      this.powerScore += 5;
    } else {
      this.powerScore -= 5;
    }
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error("The power is too much!");
    }
  }
}

const avenger = new Avenger("Hulk", 100);
