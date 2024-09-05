import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { takeDataModel } from '../takeData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public viewdata: Array<{
    id: number; username: string; email: string; name: string;
  }> = [];

  // router: any;
  constructor(private auth: AuthService, private router: Router) { }
  
  onDelete(user:any) {
    console.log(user);
    
    this.auth.Delete(user.id).subscribe(
      (result: any) => {
        
        console.log('User deleted successfully:', result);
        this.GetUserDetails(); 
      },
    );
  }
  onView(user:any){
    this.GetUserDetailsforview(user);
  }
  newForm: any;
 
  formData: any[] = [];
  ngOnInit(): void {
    {
      this.GetUserDetails();
    }
  }
  GetUserDetails(): void {
    this.auth.get().subscribe(
      (res: any) => {
        
        this.viewdata = res.result.data.map((user: any) => ({
          username: user.username,
          email: user.email,
          name: user.name,
          id:user.Mainid,
        }))
      },
      (error) => {
        console.error('Error fetching user details', error);
      }
    );
  }

  GetUserDetailsforview(user:any): void {
    this.auth.getbyId(user.id).subscribe(
      (res: any) => {
        // console.warn(res);
        
        this.viewdata = res.result.data.map((user: any) => ({
          username: user.username,
          email: user.email,
          name: user.name,
          id:user.Mainid,
        }))
      },
      (error) => {
        console.error('Error fetching user details', error);
      }
    );
  }

  edit(user:any) {
    debugger
    this.router.navigate(['/update',{queryparamter: user.json.stringify(user)}]);
  }
}


class take {

}
