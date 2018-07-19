import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { TradersComponent } from './traders/traders.component';
import {TradersService} from './traders/traders.service';
import {RoutingModule} from './routing/routing.module';
import {MarketServiceImpl} from './market/market.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    TradersComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [TradersService, MarketServiceImpl],
  bootstrap: [AppComponent]
})
export class AppModule { }
