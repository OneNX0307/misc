import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MarkInfo} from '../model/mark-info';

@Injectable({
  providedIn: 'root'
})
export class LotMarkService {

  constructor(private http: HttpClient) { }

  getLotMarks(): Observable<MarkInfo[]> {
    return this.http.get<MarkInfo[]>('assets/stub/lot-marks.json')
  }
}
