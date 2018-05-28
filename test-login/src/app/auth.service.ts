import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from "moment";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

sendToken = true;

  constructor(private http: HttpClient) {
  }

  createUser(username: string, password: string){
    let body = JSON.stringify({ 'username': username, 'password': password });
    let headers1 = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.sendToken=false;
    return this.http.post('http://localhost:8080/users/sign-up', body, { headers: headers1});
  }

  attemptAuth(username: string, password: string) {
    let credntials = JSON.stringify({ 'username': username, 'password': password });
    let headers1 = new HttpHeaders({ 'Content-Type': 'application/json' });

    //console.log('attempAuth ::');
    return this.http.post<auth_respn>('http://localhost:8080/login', credntials, { headers: headers1, observe: 'response' });

  }

  generateTask() {
    let body = JSON.stringify({ 'description': 'Hi, Imran Tahir here' });
    let headers1 = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Generating new tasks ::');
    return this.http.post<auth_respn>('http://localhost:8080/tasks', body, { headers: headers1 });
  }

  getTasks() {
    return this.http.get<task_int[]>('http://localhost:8080/tasks');
  }

  deleteTask(task_id) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete('http://localhost:8080/tasks' + '/' + task_id, httpOptions)
      .pipe(tap(_ => console.log('deleted task id= ' + task_id)));
  }

  logout() {
    localStorage.removeItem("token");
    
  }


}

interface auth_respn {
  token: string;
}

interface task_int {
  id: string;
  description: string
}