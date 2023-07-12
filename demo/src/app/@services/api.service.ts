import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  httpPost(url: string, body: object): Observable<any> {
    return this.http.post('/spring'+url, body);
  }

  httpGet(url: string): Observable<any> {
    return this.http.get('/spring'+url);
  }
}
