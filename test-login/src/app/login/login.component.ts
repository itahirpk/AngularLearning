import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  form;
  tasks;




  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private http: HttpClient) {


    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      task_id: ['']
    });
  }
  newTask() {
    this.authService.generateTask().subscribe(data => console.log('in create tasks ' + data));
  }

  getAllTasks() {
    this.authService.getTasks().subscribe(data => this.tasks = data);
    console.log('Task listing ' + this.tasks);

  }

  deleteTask() {
    this.authService.deleteTask(this.form.value.task_id).subscribe();
  }

  signUp() {
    this.authService.createUser(this.form.value.email, this.form.value.password).subscribe();
    this.authService.sendToken = true;
  }

  login() {

    this.authService.attemptAuth(this.form.value.email, this.form.value.password).subscribe(
      data => {
        localStorage.setItem('token', data.headers.get('authorization'));

        //          this.decodeToken(localStorage.getItem('token') );
        //          this.token.saveToken(data.token);
        //          this.router.navigate(['user']);
      }, err => {
        if (err.status == 401) {
          let snakbarref = this.snackbar.open('Invalid credentials', 'Retry', {
            duration: 2000
          }); //console.log('Invalid username or password ' +err);
          snakbarref.onAction().subscribe(() => {
            console.log('Snackbar retry clicked');

          })
        }
      }
    );
  }

  ngOnInit() {
  }
}

