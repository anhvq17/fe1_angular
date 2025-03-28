import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NzCardModule, NzTableModule, NzGridModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: any[] = [];
  totalMembers: number = 0;
  totalCost: number = 0;
  totalTasks: number = 0;
  upcomingProjects: number = 0;
  spentCost: number = 0;
  remainingCost: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/projects').subscribe(data => {
      this.projects = data;
      this.calculateMetrics();
    });
  }

  calculateMetrics(): void {
    this.totalMembers = this.projects.reduce((sum, proj) => sum + proj.size, 0);
    this.totalCost = this.projects.length * 55712;
    this.totalTasks = this.projects.reduce((sum) => sum + (Math.floor(Math.random() * 9) + 1), 0);
    this.upcomingProjects = this.projects.length;
    this.spentCost = this.totalCost * 0.2;
    this.remainingCost = this.totalCost - this.spentCost;
  }
}