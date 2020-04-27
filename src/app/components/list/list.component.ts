import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataListItems } from '../../models/list.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items: DataListItems[];
  public item: DataListItems;
  public selectItem: DataListItems;
  public wordSort = '';

  public isDisabled = false;

  constructor(private data: DataService, private searchService: SearchService) {
    this.searchService.wordSorting.subscribe(wordSort => this.wordSort = wordSort);
  }

  public select(item: DataListItems, event): void {
    if (!event.currentTarget.classList.contains('isDisabled')) {
      sessionStorage.setItem('active', String(item.id));
      this.data.searchItemDeatil(item.id);
      this.selectItem = item;
    }
  }

  ngOnInit(): void {
    this.data.searchYoutube()
    .subscribe(
      data => {
        this.items = data;
        this.selectItem = (sessionStorage.active === undefined)
          ? this.items[0] : this.items[+sessionStorage.active - 11];
    });
  }
}
