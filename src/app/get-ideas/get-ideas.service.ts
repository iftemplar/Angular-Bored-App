import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetIdeasService {
  constructor(private http: HttpClient) {}

  getIdeas(): Observable<any> {
    return this.http.get('http://www.boredapi.com/api/activity/');
  }
}
