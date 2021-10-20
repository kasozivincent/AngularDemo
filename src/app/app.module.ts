import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { MetricComponent } from './Components/metric/metric.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashBoardComponent,
    MetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
