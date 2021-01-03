import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = window["cfgApiBaseUrl"];
  constructor(private http: HttpClient) {}

  joinGame(data): Observable<any> {
    return this.http.post(this.url + "/joinGame",data);
  }
  fetchJoinPlayer(game_id): Observable<any> {
    let form=new FormData()
    form.append('game_id',game_id)
    return this.http.post(this.url + "/fetchJoinPlayer",form);
  }
}
