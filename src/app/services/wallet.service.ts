import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private url = window["cfgApiBaseUrl"];
  constructor(private http: HttpClient) { }

  getWalletBalance():Observable<any>{
    return this.http.get(this.url + "/wallet");
  }
  getTxnHistory():Observable<any>{
  return this.http.get(this.url + "/GetUserTransaction");
  }
  withdrawRequest(data):Observable<any>{
    return this.http.post(this.url + "/withdraw",data);
  }
}
