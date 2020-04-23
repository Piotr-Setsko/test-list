import { Component, OnInit, Input } from '@angular/core';
import { DataListItems } from '../../models/list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() public item: DataListItems;

  constructor() { }

  ngOnInit(): void {
  }

}
