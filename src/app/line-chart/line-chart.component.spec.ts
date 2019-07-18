import { TestBed, async } from "@angular/core/testing";
import { LineChartComponent } from "./line-chart.component";

describe("LineChartComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartComponent]
    }).compileComponents();
  }));

  describe("My first test suite", () => {
    it("should perform a simple test", () => {
      expect(true).toBe(true);
    });
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(LineChartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-first-project'`, () => {
    const fixture = TestBed.createComponent(LineChartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("my-first-project");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(LineChartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to my-first-project!"
    );
  });
});
