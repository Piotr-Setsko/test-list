import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private wordInput: string;

  public wordSorting: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public onInputWord(event: string): void {
    this.wordInput = event;
    this.wordSorting.emit(this.wordInput);
  }
}
