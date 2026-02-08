import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
   id!: number;
  employee!: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe(data=> {
      this.employee = data;
      
    }, error => console.log(error));
  }

 

}
