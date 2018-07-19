import { Component, OnInit } from '@angular/core';
import {Trader} from '../Domain/Trader';
import {TradersService} from '../traders/traders.service';
import {Trade} from '../Domain/Trade';
import {MarketServiceImpl, MarketService} from '../market/market.service';
import {Stock} from '../domain/Stock';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-trader-details',
  templateUrl: './trader-details.component.html',
  styleUrls: ['./trader-details.component.css']
})
export class TraderDetailsComponent implements OnInit {

  countInput: FormControl = new FormControl();
  symbolInput: FormControl = new FormControl();
  trader: Trader;
  constructor(private tradersService: TradersService, private marketService: MarketServiceImpl) {
    this.trader = new Trader('');
    this.countInput.setValue(10);
    }
  ngOnInit() {
    this.tradersService.getTrader('John').then(trader => this.trader = trader);
  }

  buyStock() {
    const trade: Trade =
      this.marketService.buyStock(this.symbolInput.value,
        this.countInput.value);
    if (!trade) {
      alert(`symbol ${this.symbolInput.value} not found`);
      return;
    }
    this.trader.addToPortfolio(trade);
    this.symbolInput.setValue('');
  }


}
