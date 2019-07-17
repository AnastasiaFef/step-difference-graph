import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LineChartModule } from "./line-chart/line-chart.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, LineChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
