import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataListItems } from '../../models/list.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Renderer2 } from '@angular/core';

import { ItemResponse } from '../../models/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() public item: DataListItems;
  @Input() items;

  public isDisabled: boolean = false;
  public listUrl:string;
  public detailData:ItemResponse;
  public btn: string = 'X';
  //public disable: boolean = false;

  constructor(private data: DataService, private render:Renderer2) { }

  public activated(item, event): void {
    const currentItem = event.target.parentElement.parentElement;

    if (!currentItem.classList.contains('isDisabled')) {
      this.btn = 'R';
      this.render.addClass(currentItem,'isDisabled');
      this.items.push(this.items.splice(this.items.indexOf(item), 1)[0]);
    } else {
      this.btn = 'X';
      this.render.removeClass(currentItem,'isDisabled');
      this.items.splice(this.items.indexOf(item), 1);
      this.items.splice((item.id - 11),0, item);
    }

    event.stopPropagation();
  }

  ngOnInit(): void {
  }
}
