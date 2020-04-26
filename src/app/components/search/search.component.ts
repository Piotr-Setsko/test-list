import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public wordInput: string;

  constructor(private searchService: SearchService) {
    this.searchService.wordSorting.subscribe(wordInput => this.wordInput = wordInput);
   }

   public wordSort(event: string): void {
    this.wordInput = event;
    this.searchService.onInputWord(this.wordInput);
  }

  ngOnInit(): void {

  }

}
