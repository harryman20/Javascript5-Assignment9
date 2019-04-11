import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  date: Date;
  titleCheck: string;
  constructor(private contentService : ContentService) { }

  ngOnInit() {
    this.date = new Date();
    this.contentService.getContent().subscribe(contentListFromService =>
          this.content = contentListFromService);
  }
  clickEvent() {
    const numOfResults = this.content.filter(c => c.title === this.titleCheck).length;
    alert ('The number of items with that title is: ' + numOfResults);
    console.log(this.content);
}
}
