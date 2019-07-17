import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";

import { StepsService } from "../shared/services/steps.service";
import { Steps } from "../shared/models/steps-obj.model";
import { FakeStepsService } from "../shared/services/fake-steps.service";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html"
})
export class LineChartComponent implements OnInit {
  rangeFrom: string = "2018-10-01";
  rangeTo: string = "2018-10-31";
  steps: string;
  fakeSteps;
  selectedDates: string[] = [];
  selectedFakeSteps: number[] = [];
  selectedTrackedSteps: number[] = [0,0,0,0,0,0,0,3000,2000,0,0,0,0,0,0,0,0,0,0,12000,0,0,0,0,2832,13456,0,0,0,0,0]; //hardcoded data that I should receive from the API
  selectedStepsDiff: number[] = [];

  constructor(
    private stepsService: StepsService,
    private fakeStepsService: FakeStepsService
  ) {}

  ngOnInit() {
    //CORS REGECTION ON LOCALHOST!!!!
    // this.stepsService
    //   .getStepsByDateRange(this.rangeFrom, this.rangeTo)
    //   .subscribe((steps: Steps) => {
    //     if (steps) {
    //       this.steps = JSON.stringify(steps);
    //     }
    //   });

    this.fakeStepsService.getFakeSteps().subscribe((steps: Steps) => {
      if (steps) {
        this.fakeSteps = steps;
        this.getSteps(this.fakeSteps, this.rangeFrom, this.rangeTo);
        this.getDiff(this.selectedFakeSteps, this.selectedTrackedSteps);
      }
    });
  }

  getSteps(stepsArr, dateFrom: string, dateTo: string) {
    const startDate = new Date(dateFrom);
    const endDate = new Date(dateTo);
    for (let i = 0; i < stepsArr.length; i++) {
      let currDate = new Date(stepsArr[i].date);
      if (startDate <= currDate && currDate <= endDate) {
        this.selectedDates.push(stepsArr[i].date);
        this.selectedFakeSteps.push(+stepsArr[i].steps);
      }
    }
    console.log(this.selectedDates);
    console.log(this.selectedFakeSteps);
  }

  getDiff(fakeSteps: number[], steps: number[]) {
    for (let i = 0; i < fakeSteps.length; i++) {
      this.selectedStepsDiff.push(fakeSteps[i] - steps[i]);
    }
  }

  public lineChartData: ChartDataSets[] = [
    {
      data: this.selectedTrackedSteps,
      label: "Synced"
    },
    {
      data: this.selectedFakeSteps,
      label: "Tracked"
    },
    {
      data: this.selectedStepsDiff,
      label: "Difference"
    }
  ];
  public lineChartLabels: Label[] = this.selectedDates;
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
      borderColor: "rgba(77,83,96,0.7)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    {
      // turquoise
      backgroundColor: "rgba(9,189,201,0.3)",
      borderColor: "turquoise",
      pointBackgroundColor: "rgba(9,189,201,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(9,189,201,1)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
}
