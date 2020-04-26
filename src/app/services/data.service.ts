import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ItemResponse } from '../models/item.model';
import { ListResponse, DataListItems } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private listUrl: string;
  public item: ItemResponse;

  public itemsResp2: BehaviorSubject<ItemResponse> = new BehaviorSubject(null);
  public currentItemResp: Observable<ItemResponse> = this.itemsResp2.asObservable();

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

  public searchItemDeatil(id): Observable<ItemResponse> {
    this.listUrl =
    'https://cors-anywhere.herokuapp.com/https://mrsoft.by/tz20/cats/'+ id +'.json';

    this.httpClient.get<ItemResponse>(this.listUrl)
      .subscribe(data => this.itemsResp2.next(data));

    return this.httpClient.get<ItemResponse>(this.listUrl);
  }
}
