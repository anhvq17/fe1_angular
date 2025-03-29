import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule, 
    NzButtonModule, 
    NzInputModule, 
    NzFormModule, 
    NzCardModule
  ],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  validateForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private api: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', Validators.required],
      size: ['', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]],
    });
  }

  onCreate(): void {
    this.isSubmitted = true;

    if (this.validateForm.invalid) {
      this.validateForm.markAllAsTouched();
      return;
    }

    this.api.post('http://localhost:3000/projects', this.validateForm.value).subscribe(res => {
      if (res) {
        alert("Thêm mới thành công!");
        this.router.navigate(['projects']);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['projects']);
  }
}
