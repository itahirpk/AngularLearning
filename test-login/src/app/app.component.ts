import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  greeting = {};
  show = true;  // can be used to show login page only if token is expired
  constructor(private http: HttpClient) {
    
    //http.get('http://140.86.69.243:8080/resource').subscribe(data => this.greeting = data);
  }
}
