import { Injectable } from '@angular/core';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  dept: Department[];
  deptToUpd: Department;
  deptUpdateFlag: boolean;
  deptToUpdIndex: number;
  
  
  constructor() {

    this.dept = department;
    this.deptToUpd = null;
    this.deptUpdateFlag = false;
    this.deptToUpdIndex = -1;
   }

   ngOnInit() {
    
   }

   getAllDepartments() {
     return this.dept;
   }

   add(department) {
    this.dept.push(department);
  }

    delete(department){
      let index = this.dept.indexOf(department);
      if (index => 0) {
        this.dept.splice(index,1);
    }
  }

  storeDeptToUpdate(department){
    this.deptToUpd = department;
    this.deptToUpdIndex = this.dept.indexOf(department);
  }

  getDeptToUpdate(){
    return this.deptToUpd;
  }

  processDeptToUpdate(updatedDepartment) {
    this.dept[this.deptToUpdIndex] = updatedDepartment;

    this.deptToUpd = null;
    this.deptUpdateFlag = false;
    this.deptToUpdIndex = -1;
   }

  }


const department = [
  {
    dept_id: 1,
    dept_name: 'Finance',
    dept_desc: 'North Finance Department',
    cost_center: 'FINA'

  },
  {
    dept_id: 2,
    dept_name: 'Technical',
    dept_desc: 'North Technical Department',
    cost_center: 'TECH'

  },
  {
    dept_id: 3,
    dept_name: 'Marketing',
    dept_desc: 'North Marketing Department',
    cost_center: 'MKTG'

  }
];