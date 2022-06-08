import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userservice: UserService) {

  }
  orders: any = [];
  item = { //model
    name: 'iphone',
    price: 300,
    quantity: 2,
    choose: '',
    total: 0
  }
  deleteUser(item:any, index:number){
    const observable = this.userservice.deleteUser(item);
    observable.subscribe(response =>{
      alert('deleted successfully');
      this.orders.splice(index,1);
    })
  }
  ngOnInit() {
    console.log('init');
    const promise = this.userservice.getAllUsers();
    promise.subscribe(response => {
      this.orders = response;
    })
  }
  
  save() {
    console.log('clicked');
    const promise = this.userservice.saveUser(this.item);
    const total = (this.item.price*this.item.quantity);
    this.item.total = total;
    promise.subscribe(response => {
      console.log(response);
    },
    error=>{
      alert('something went wrong, please retry')
    }
    )
  }
}


