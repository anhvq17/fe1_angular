import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-edit-project',
  imports: [
    CommonModule, 
    FormsModule, 
    NzButtonModule, 
    NzInputModule, 
    NzFormModule, 
    NzCardModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent {
  constructor(
    private actRoute:ActivatedRoute,
    private api:HttpClient,
    private router:Router
  ) {}

  apiUrl:string = `http://localhost:3000/projects`;
  id:number = 0;
  oldProject:any;

  ngOnInit():void {
    this.id = this.actRoute.snapshot.params['id'];
    this.getDetails();
  }

  getDetails():void {
    this.api.get(`${this.apiUrl}/${this.id}`).subscribe(res => {
      if (res) {
        this.oldProject = res
      }
    })
  }

  onEdit(data:any):void {
    this.api.put(`${this.apiUrl}/${this.id}`, data).subscribe(res => {
      if (res) {
        alert("Cập nhật thành công!");
        this.router.navigate([`projects`])
      }
    })
  }

  onCancel():void {
    this.router.navigate(['projects']);
  }  
}
