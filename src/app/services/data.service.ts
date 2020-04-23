import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ListResponse, DataListItems } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private listUrl: string;

  constructor(private httpClient: HttpClient) { }

  public searchYoutube(): Observable<DataListItems[]> {
    this.listUrl =
    'https://cors-anywhere.herokuapp.com/https://mrsoft.by/tz20/list.json';

    return this.httpClient.get<ListResponse>(this.listUrl)
    .pipe(
      map(value => {
        const { data } = value;
        return data;
      })
    );
  }
}
