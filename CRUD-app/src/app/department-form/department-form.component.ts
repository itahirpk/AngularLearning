import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  form;
  v_dept_id;
  v_dept_name = '';
  v_dept_desc = ''
  v_dept_CC = '';
  v_show = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private departmentServcie: DepartmentService) { }

  ngOnInit() {
    if (this.departmentServcie.deptToUpd == null) {}
    else {
      this.v_dept_id = this.departmentServcie.deptToUpd.dept_id;
      this.v_dept_name = this.departmentServcie.deptToUpd.dept_name;
      this.v_dept_desc = this.departmentServcie.deptToUpd.dept_desc;
      this.v_dept_CC = this.departmentServcie.deptToUpd.cost_center;
      this.v_show = true;
    }
    this.form = this.formBuilder.group({
      dept_id: this.formBuilder.control(this.v_dept_id,Validators.required),
      dept_name: this.formBuilder.control(this.v_dept_name),
      dept_desc: this.formBuilder.control(this.v_dept_desc),
      cost_center: this.formBuilder.control(this.v_dept_CC)

      });
    }

    onSubmit(dept){
      if (this.v_show) {
        this.departmentServcie.processDeptToUpdate(dept);
        this.v_show = false;
        this.router.navigate(['/main']);
      }
      else {
      console.log(dept.dept_name);
      this.departmentServcie.add(dept);
      }
    }
  

}
