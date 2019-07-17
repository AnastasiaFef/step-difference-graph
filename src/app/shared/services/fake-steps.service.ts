import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FakeStepsService {
  constructor(private http: HttpClient) {}

  getFakeSteps() {
    return this.http.get(`http://localhost:3000/trackedDays`);
  }
}
