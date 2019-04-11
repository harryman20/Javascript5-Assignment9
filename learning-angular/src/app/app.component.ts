import { Component } from '@angular/core';
import {Content} from "./content-card/content-list-helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'example-project';
  constructor() {
  }
}
