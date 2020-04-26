import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataListItems } from '../../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items: DataListItems[];
  public item: DataListItems;
  public selectItem: DataListItems;

  public isDisabled: boolean = false;
  clickItem;

  constructor(private data: DataService) { }

  public select(item: DataListItems, event): void {
    this.data.searchItemDeatil(item.id);
    if (!event.currentTarget.classList.contains('isDisabled')) {
      this.selectItem = item;
    }
  }

  ngOnInit(): void {
    this.data.searchYoutube()
    .subscribe(
      data => {
        this.items = data;
        this.selectItem = this.items[0];
    })
  }
}
