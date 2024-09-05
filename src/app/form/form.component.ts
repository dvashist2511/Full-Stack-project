import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: any[] = [];
data: any;

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    
  }
  save(formData: any) {
    console.warn("sdfcsdds", formData);

    this.auth.createUser(formData).subscribe((res) => {
      console.warn(res);
      this.router.navigate(['/view']);
    
    });
  }
  getList() {
    this.auth.get().subscribe((result: any) => {
      this.formData = result;
    });
  }
}