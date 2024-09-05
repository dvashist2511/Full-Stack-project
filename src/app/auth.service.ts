import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseServerUrl='https://localhost:7242/api/User/Login';
  allow: boolean | undefined;
  constructor(private http: HttpClient) { }
  baseurl=  'https://localhost:7291/api/UserDetail/';
  url='https://localhost:7242/api/User/';
  get()
  {
    return this.http.get(this.baseurl+'GetUserDetails'  );
  }
  getbyId(id: any) {
    return this.http.get(this.baseurl+`GetUserDetails?id=${id}`);
  }
  createUser(data:any){
    return this.http.post(this.baseurl+'CreateUserDetails',data);
  }
  Update(id:any,data:any)
  {
    return this.http.put(this.baseurl+'UpdateUserDetails/'+`${id}`,data);
  }
  Delete(id:any){
    return this.http.delete(this.baseurl+`deleteUserDetails?id=${id}`);
  }
  // login(username:any,password:any){
  //   // return this.http.login(this.url+`login`);
  //   return this.http.login(`${this.url}Login`, );
  // }

  login(email:any, password:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.http.post<any>(this.url + "Login", body, { headers }).pipe(
      map((response: { Token: string; User: any; }) => {
        if (response && response.Token) {
          localStorage.setItem('token', response.Token);
          localStorage.setItem('user', JSON.stringify(response.User));
        }
        this.allow=true;
        return response;
      })
     
    );
 
  }
}



