import { Component, OnInit } from '@angular/core';
import {Trader} from '../Domain/Trader';

@Component({
  selector: 'app-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.css']
})
export class TradersComponent implements OnInit
{
  traders: Trader[];
  ngOnInit()
  {
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
}
