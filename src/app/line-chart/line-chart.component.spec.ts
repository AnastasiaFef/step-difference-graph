import { TestBed, async } from "@angular/core/testing";
import { LineChartComponent } from "./line-chart.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of, Observable } from "rxjs";

import { FakeStepsService } from "../shared/services/fake-steps.service";
import { StepsService } from "../shared/services/steps.service";

describe("LineChartComponent", () => {
  let stepsServiceSpy: jasmine.SpyObj<StepsService>;
  let fakeStepsServiceSpy: jasmine.SpyObj<FakeStepsService>;

  beforeEach(async(() => {
    stepsServiceSpy = jasmine.createSpyObj("StepsService", [
      "getStepsByDateRange"
    ]);
    fakeStepsServiceSpy = jasmine.createSpyObj("FakeStepsService", [
      "getFakeSteps"
    ]);

    stepsServiceSpy.getStepsByDateRange.and.returnValue(of([]));
    fakeStepsServiceSpy.getFakeSteps.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        LineChartComponent,
        { provide: StepsService, useValue: stepsServiceSpy },
        { provide: FakeStepsService, useValue: fakeStepsServiceSpy }
      ]
    });
  }));

  describe("Test suite", () => {
    it("should perform a simple test", () => {
      expect(true).toBe(true);
    });
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(LineChartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render canvas", () => {
    const fixture = TestBed.createComponent(LineChartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div.container canvas")).not.toBe(null);
  });

  xit("calculates the difference", () => {
    stepsServiceSpy.getStepsByDateRange.and.returnValue(
      of([
        {
          date: "2019-07-21",
          activities: [
            {
              name: "",
              trackedValue: "58",
              pointsEarned: 100
            }
          ],
          totalPointsEarned: 100
        }
      ])
    );

    fakeStepsServiceSpy.getFakeSteps.and.returnValue(
      of([
        {
          date: "2019-07-21",
          steps: "100"
        }
      ])
    );

    const fixture = TestBed.createComponent(LineChartComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.selectedStepsDiff[0]).toEqual(42);
  });
});
