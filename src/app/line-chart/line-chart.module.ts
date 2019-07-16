import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";

import { LineChartComponent } from "./line-chart.component";

@NgModule({
  declarations: [LineChartComponent],
  exports: [LineChartComponent],
  imports: [CommonModule, ChartsModule]
})
export class LineChartModule {}
