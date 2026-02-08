import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {CommonModule} from "@angular/common";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }

 
  updateEmployee(id: number){
    console.log("update employee with id of "+ id);
    this.router.navigate(["/update-employee", id]);
  }

  deleteEmployee(id: number){
    console.log("Employee with the id of "+ id + " has been deleted");
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    }, error => console.log(error));
  }
  
  employeeDetails(id: number){
    console.log("employee details with id of "+ id);
    this.router.navigate(["/employee-details", id]);
  }
}
