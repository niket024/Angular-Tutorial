import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from "rxjs/index";
import { ApiResponse } from "./api.response";
import { map, max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private http: HttpClient) { }
  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) {
      result += val;
    }
    return result;
  }
  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  //API call
  login(loginPayload: { username: string; password: string; }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:7070/' + 'token/generate-token', loginPayload);
  }
 
  mapExample() {
    //map Example
    map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`Output is: ${v}`));
    let list1 = [1, 6, 15, 10, 58, 2, 40];

    from(list1).pipe(max((a, b) => a - b)).subscribe(x => console.log(
      "The Max value is " + x)
    );
  }
}
