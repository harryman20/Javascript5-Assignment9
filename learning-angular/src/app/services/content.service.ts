import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../content-card/content-list-helper';
import {MessageService} from '../messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-type':
                'application/json' })
    };

  constructor(private messageService : MessageService, private http: HttpClient) { }

  getContent() :Observable<Content []>{
      this.messageService.add('Content was fetched!');
      return this.http.get<Content[]>("api/content");
  }
  addContent(content: Content): Observable<Content>{
        let thePromise = new Promise((success, fail) => {
            let testPass = true;
            if (testPass){
                success(this.messageService.add('Content was added!'));
            }
            else{
                fail(this.messageService.add('Content failed to be added!'))
            }
            thePromise.then(successResult => console.log(successResult))
                .then(failResult => console.log(failResult));
        });
        return this.http.post<Content>("api/content", content, this.httpOptions);
  }

    getContentItem(id): Observable<Content>{
        console.log("Retrieving OBSERVABLE content item");
        return this.http.get<Content>("api/content/" + id);
    }

}
