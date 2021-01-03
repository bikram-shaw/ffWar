import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = window["cfgApiBaseUrl"];
  constructor(private http: HttpClient) {}
  signUp(data: FormData): Observable<any> {
    return this.http.post(this.url + "/signup", data);
  }

  
  login(data: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Content-Type", "application/json");
    headers.append("x-csrf-token", "_csrf");
    return this.http.post(this.url + "/login", data, { headers: headers }).pipe(
      tap((token) => {
        return token;
      })
    );
  }
}
