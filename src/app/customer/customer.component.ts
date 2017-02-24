import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public selectedTab = 0;


  constructor() { }

  ngOnInit() {

  }

  changeImage(){
    console.log("Change Image");
  }

}
