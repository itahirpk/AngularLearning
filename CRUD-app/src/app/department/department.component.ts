import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  
  constructor() {
      
   }

   
   @Input() department;
   @Output() delete = new EventEmitter;
   @Output() update = new EventEmitter;

  ngOnInit() {
    
  }

  onDelete() {
    console.log(this.department);
    this.delete.emit(this.department);
  }

  onUpdate() {
    console.log(this.department);
    this.update.emit(this.department);
  }

}
