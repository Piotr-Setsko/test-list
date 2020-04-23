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

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.searchYoutube().subscribe(data => this.items = data);
  }

}
