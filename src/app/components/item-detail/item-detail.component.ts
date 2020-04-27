import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemResponse } from '../../models/item.model';
import { ListResponse, DataListItems } from '../../models/list.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  public itemData: ItemResponse | null;
  items: DataListItems[];
  item: DataListItems;

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
    this.data.searchYoutube().subscribe(result => {
      this.items = result;
    });

    this.data.searchItemDeatil(sessionStorage.active || 11).subscribe(
      result => {
        this.itemData = result;
      }
    );

    this.data.currentItemResp.subscribe(result => {
      this.itemData = result;
    });
  }
}
