import { Injectable } from '@angular/core';
import {Trader} from '../Domain/Trader';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TradersService {
  traders: Trader[];
  constructor() {
    this.traders = this.getMockTraders();
  }
  private getMockTraders(): Trader[] {
    const traders: Trader[] = [];
    traders.push(new Trader('John'));
    traders.push(new Trader('Paul'));
    traders.push(new Trader('George'));
    traders.push(new Trader('Ringo'));
    return traders;
  }
  add(name: string) {
    this.traders.push(new Trader(name));
  }
  getTraders(): Promise<Trader[]> {
    return new Promise(resolve =>
      setTimeout(() => resolve(Promise.resolve(this.traders)), 100));
  }
}
