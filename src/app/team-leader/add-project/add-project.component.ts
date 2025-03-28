import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-add-project',
  imports: [
    CommonModule, 
    FormsModule, 
    NzButtonModule, 
    NzInputModule, 
    NzFormModule, 
    NzCardModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  constructor(
    private api:HttpClient,
    private router:Router
  ) {}

  apiUrl:string = 'http://localhost:3000/projects';

  onCreate(data:any):void {
    this.api.post(this.apiUrl, data).subscribe(res => {
      if (res) {
        alert("Thêm mới thành công!");
        this.router.navigate([`projects`])
      }
    })
  }

  onCancel():void {
    this.router.navigate(['projects']);
  }
}
