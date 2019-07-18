import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { LineChartComponent } from "./line-chart.component";
import {
  Component,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { FakeStepsService } from "../shared/services/fake-steps.service";
import { StepsService } from "../shared/services/steps.service";
// import { provideMagicalMock } from "../shared/services/spyHelper";

@Component({
  selector: "canvas",
  template: "<div></div>"
})
class MockCanvas {}

describe("LineChartComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        // provideMagicalMock(FakeStepsService),
        // provideMagicalMock(StepsService)
      ]
    }).compileComponents();
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

  it("should render Loading message", () => {
    const fixture = TestBed.createComponent(LineChartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div").textContent).toContain("Loading...");
  });

//   describe("Steps", () => {
//     let StepsServiceMock: jasmine.SpyObj<StepsService>;
//     let component: StepsService;
//     let fixture: ComponentFixture<StepsService>;

//     beforeEach(() => {
//       StepsServiceMock = TestBed.get(StepsService);
//       fixture = TestBed.createComponent(StepsService);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     })

//   });
});
