import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Content } from "../content-card/content-list-helper";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
    id: number;
    content: any = {};

    constructor(private route: ActivatedRoute, private contentService: ContentService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(response => {
            this.id = +response.get('id');
            this.contentService.getContentItem(this.id).subscribe(
                c => this.content = c);
        });
    }

}
