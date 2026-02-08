import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  
  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },error => console.log(error));
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
    this.goToEmployeeList();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);

  }

   onSubmit(){
    this.saveEmployee();
    console.log(this.employee);
  }
}
