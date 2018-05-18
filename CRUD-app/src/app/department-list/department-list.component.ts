import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  dept;

  constructor(private deptService: DepartmentService,
              private router: Router) {
    this.dept = deptService.getAllDepartments();
   }

  ngOnInit() {
  }

  onDeleteDepartment(department){
    this.deptService.delete(department);  
  }

  onUpdateDepartment(department){
    this.deptService.storeDeptToUpdate(department);
      
        this.router.navigate(['/update']);
     
      console.log(this.deptService.deptToUpd);
  }

  



}
