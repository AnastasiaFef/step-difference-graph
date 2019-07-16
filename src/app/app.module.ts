import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { LineChartModule } from "./line-chart/line-chart.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartsModule, LineChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
