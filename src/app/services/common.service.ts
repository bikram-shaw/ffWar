import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpClient) {}

  private url = window["cfgApiBaseUrl"];
  
  upcomingMatches(): Observable<any> {
    return this.http.get(this.url + "/active-game");
  }
  ongoingMatches(): Observable<any> {
    return this.http.get(this.url + "/ongoing-game");
  }

  updateWallet=new Subject<number>()
}
