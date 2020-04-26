import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemResponse } from '../../models/item.model';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  public itemData: ItemResponse | null;

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.searchItemDeatil(11).subscribe(
      result => this.itemData = result
    );
    this.data.currentItemResp.subscribe(result => this.itemData = result);
  }
}
