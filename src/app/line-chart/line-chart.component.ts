import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html"
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    //will update with int API data:
    {
      data: [10342, 6352, 3372, 3253, 6322, 5345, 4350, 3252, 10234, 13942],
      label: "Synced"
    },
    //to be updated with dummy API data:
    {
      data: [13003, 7605, 3645, 3705, 7332, 5618, 4750, 3352, 11344, 15000],
      label: "Tracked"
    },
    //update to calculate the difference:
    {
      data: [2661, 1253, 273, 452, 1010, 273, 400, 100, 1110, 1038],
      label: "Difference"
    }
  ];
  //update to insert days of the month:
  public lineChartLabels: Label[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    {
      // red
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "red",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}
}
