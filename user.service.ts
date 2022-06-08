import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://localhost:3000/orders/";

@Injectable({//decorator
  providedIn: 'root'
})
export class UserService {
  //dependency injection
  constructor(public http:HttpClient) { }
  deleteUser(user:any){
    return this.http.delete(BASE_URL+user.id);
  }
  saveUser(user:any){
    return this.http.post(BASE_URL, user);
    //returns promise
  }

  getAllUsers(){
    return this.http.get(BASE_URL);
  }
}
    