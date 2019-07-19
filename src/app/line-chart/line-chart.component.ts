import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";

import { StepsService } from "../shared/services/steps.service";
import { FakeSteps } from "../shared/models/fake-steps.model";
import { FakeStepsService } from "../shared/services/fake-steps.service";
import { forkJoin } from "rxjs";
import { TrackedDays } from '../shared/models/tracked-days.model';

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  rangeFrom: string = "2018-10-01";
  rangeTo: string = "2018-10-31";
  fakeSteps: FakeSteps[];
  steps: TrackedDays[];
  selectedDates: string[] = [];
  selectedFakeSteps: number[] = [];
  selectedTrackedSteps: number[] = [];
  selectedStepsDiff: number[] = [];
  isDataAvailable: boolean;

  constructor(
    private stepsService: StepsService,
    private fakeStepsService: FakeStepsService
  ) {}

  ngOnInit() {
    forkJoin(
      this.stepsService.getStepsByDateRange(this.rangeFrom, this.rangeTo),
      this.fakeStepsService.getFakeSteps(this.rangeFrom, this.rangeTo)
    ).subscribe(([steps, fakeSt]) => {
      this.steps = steps;
      this.fakeSteps = fakeSt;
      this.isDataAvailable = true;
      this.getFakeStepsArray(this.fakeSteps);
      this.getStepsArray(this.steps)
      this.getDiff(this.selectedFakeSteps, this.selectedTrackedSteps)
    }, (error) => {
      console.log("there was an error: ", error)
    }
    );
  }

  getStepsArray(stepsArr: TrackedDays[]) {
    for (let i = 0; i < stepsArr.length; i++) {
      let count = stepsArr[i].activities[0]["trackedValue"];
      count ? this.selectedTrackedSteps.push(+count) : this.selectedTrackedSteps.push(0);
    }
  }

  getFakeStepsArray(stepsArr: FakeSteps[]) {
    for (let i = 0; i < stepsArr.length; i++) {
        this.selectedDates.push(stepsArr[i].date);
        this.selectedFakeSteps.push(+stepsArr[i].steps);
    }
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
