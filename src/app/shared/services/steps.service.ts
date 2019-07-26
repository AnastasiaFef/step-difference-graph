import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TrackedDays } from "../models/tracked-days.model";

@Injectable({
  providedIn: "root"
})
export class StepsService {
  constructor(private http: HttpClient) {}

  getStepsByDateRange(
    fromDate: string,
    toDate: string
  ): Observable<TrackedDays[]> {
    return this.http.get<TrackedDays[]>(
      `http://localhost:3000/trackedDays?date_gte=${fromDate}&date_lte=${toDate}`
    );
  }
}

// API that is not accessible because of the CORS rejection

// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";

// import { Steps } from "../models/steps.model";
// import { Observable } from "rxjs";

// @Injectable({
//   providedIn: "root"
// })
// export class StepsService {
//   constructor(private http: HttpClient) {}

//   getStepsByDateRange(from: string, to: string): Observable<Steps> {
//     const requestHeaders = {
//       "Cache-Control": "no-cache",
//       group_guids:
//         "0ca6d557906c40f03c08929e546f7f7a,50fdbe8f339a5f9759c7f4c4f8845bba,c4e52b0753b09e1ca6d0a0749dc48786,1a9159f827098d5e812fd6e8ec355124,43ce832ee3241aec07839b5d830e189f,ba33491aaa760c75563b57812d204ecf,3a072eeb1b55a66e114c6e7a53c52f77,38b73c4fcc7f7d9e916c27afcd39a55c,0c96d54e75dc1a2021e0a282fef460ff,737dffcebbc3086d848b24b7d6f8c499,7e18aa838f71ed916491aff96dd9dd5d,9cf5935f3d3364c236c2c78376e107bc,1dee11813f242b6cbe36ba4766db5122,c9f9a8ec034cc9a3c4ebe97a4912164c,b1f4c6ce6e03a9140562a5a6b8971b98,a479e24e54efd8add7f69713c691a718,337d474defacb4dc4e30fcbcb2defa8c,110ad752aa996641f7258d9a5de5fdf1",
//       user_guid: "d1787f5015f7ee76ed7f2c0e00388068",
//       "Postman-Token": "50d75bf0-1d90-4a17-849d-c5f0dff3d2bb",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": "true"
//     };

//     const requestOptions = {
//       headers: new HttpHeaders(requestHeaders)
//     };

//     return this.http.get<Steps>(
//       `https://i2-ui-support.denqa01.kube.ch.int/v2/program/1c25e325-d713-48da-92f5-0a105c55e480/trackedDays?from=${from}&to=${to}`,
//       requestOptions
//     );
//   }
// }
