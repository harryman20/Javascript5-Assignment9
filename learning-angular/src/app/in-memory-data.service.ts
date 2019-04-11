import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Content} from './content-card/content-list-helper';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
    createDb(){
        const content: Content[] = new Array({
            id: 1024,
            author: 'User',
            title: 'Title',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'This is the body of the content',
            type: 'news',
            tags: ['this', 'is', 'a', 'tag', 'list']
        }, {
            id: 1025,
            author: 'User',
            title: 'Other Title',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'This is the content',
            type: 'stories'
        }, {
            id: 1026,
            author: 'User',
            title: 'Title',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'This is the body',
            type: 'stories',
            tags: ['more', 'tags']
        }, {
            id: 1027,
            author: 'User',
            title: 'Not title',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'This is the best',
            type: 'news'
        }, {
            id: 1028,
            author: 'User',
            title: 'Awesome title',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'This is even more of the best',
            type: 'news'
        })
        return{content};
    }

    genId(content: Content[]): number {
      console.log("From Memory!", content);
        return content.length > 0 ? Math.max(...content.map(content => content.id || 0)) + 1 : 2000;
    }

}
