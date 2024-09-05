import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // user: any;
  user: any = {};
  viewdata: any;
  // router: any;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }
  // edit(id:any, data:any) {
  //   this.auth.Update(id, data).subscribe((result: any)=>{
  //     console.log('User details updated successfully:', result);
  //   })
  // }
  // edit(newForm: any) {
  //   let data = {
  //     name: newForm.value.name,
  //     email: newForm.value.email,
  //     user: newForm.value.user,
  //     // Password: newForm.value.Password,
  //     // cpassword: newForm.value.cpassword
  //   };
  //   let id = newForm.value.id;
  //   this.auth.Update(id, data).subscribe((result: any) => {
  //     console.log('User details updated successfully:', result);
  //   });
  // }



  // edit(id:any){
  //   let data= this.viewdata.find((user: { id: any; })=>{return user.id===id});
  //   console.log(data);
  // }


  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('id'));
      if (userId) {
        this.auth.getbyId(userId).subscribe(
          (res: any) => {
            if (res.result && res.result.data) {
              const userData = res.result.data;
              this.user = {
                id: userData.Mainid,
                name: userData.name,
                email: userData.email,
                username: userData.username
              };
            } else {
              console.error('User data not found');
            }
          },
          (error) => {
            console.error('Error fetching user details', error);
          }
        );
      } else {
        console.error('User ID is missing');
      }
    });
  }


  edit(newForm: any): void {
    if (newForm.valid) {
      const data = {
        name: newForm.value.name,
        email: newForm.value.email,
        username: newForm.value.user
      };
      const id = this.user?.id;

      if (id) {
        this.auth.Update(id, data).subscribe(
          (result: any) => {
            console.log('User details updated successfully:', result);
            this.router.navigate(['/view']);
          },
          (error) => {
            console.error('Error updating user details', error);
          }
        );
      } else {
        console.error('User ID is missing');
      }
    }
  }
 }
