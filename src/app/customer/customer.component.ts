import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
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