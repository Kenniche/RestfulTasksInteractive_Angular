import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restful Tasks API Interactive';
  tasks = [];
  singleTask: any;
  constructor(private _httpService: HttpService) {
  }

  onButtonClick(): void {
    let tempObservable = this._httpService.getTasks()
    tempObservable.subscribe(data => {
      this.tasks = data['data'];
    });
  }

  onButtonClickParams(id: any): void {
    console.log(`Click event is working with param: ${id}`);
    let tempObservable = this._httpService.getId(id);
    tempObservable.subscribe(data => {
      this.singleTask = data['data'];
      console.log("Got our ID", data)
    });
  }
}