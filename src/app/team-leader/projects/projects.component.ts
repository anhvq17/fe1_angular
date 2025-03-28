import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-projects',
  imports: [NzDividerModule, NzTableModule, RouterLink, NzButtonModule, NzGridModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private api:HttpClient) {}

  ngOnInit():void {
    this.getList();
  }

  size: NzButtonSize = 'default';
  apiUrl:string = 'http://localhost:3000/projects';
  listProjects:any;
  getList():void {
    this.api.get(this.apiUrl).subscribe(res => {
      this.listProjects = res;
    })
  }

  onDelete(id:number):void {
    if (confirm('Bạn có chắc muốn xoá?')) {
      this.api.delete(`${this.apiUrl}/${id}`).subscribe(res => {
        alert('Xoá thành công!');
        this.getList();
      })
    }
  }
}
