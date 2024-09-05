import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  // authservice: any;
  // ngForm: any;
// login: any;

  constructor(private router: Router,private authservice:AuthService) { }

  register() {
    this.router.navigate(['/form']);

  }
  onSubmit(formValue: { username: string, password: string }): void {

    this.authservice.login(formValue.username, formValue.password).subscribe(
      (response: any) => {
        console.warn("Login Successful", response);
        this.router.navigate(['/check']);
      },

    );
  }


}
