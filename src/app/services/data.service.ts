import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private listUrl: string;
  private items;

  constructor(private httpClient: HttpClient) { }

  public searchYoutube(): void {
    this.listUrl =
    'https://mrsoft.by/tz20/list.json';

    this.httpClient.get(this.listUrl)
    .subscribe(data => console.log(data));
  }
}
