import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FakeSteps } from "../models/fake-steps.model";

@Injectable({
  providedIn: "root"
})
export class FakeStepsService {
  constructor(private http: HttpClient) {}

  getFakeSteps(fromDate: string, toDate: string): Observable<FakeSteps[]> {
    return this.http.get<FakeSteps[]>(
      `http://localhost:3000/fakeTrackedDays?date_gte=${fromDate}&date_lte=${toDate}`
    );
  }
}
