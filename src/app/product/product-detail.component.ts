import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public selectedTab = 0;

  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    let id = +this.activatedRouter.snapshot.params['id'];

    console.log(id);
  }

  changeImage(){
    console.log("Change Image");
  }
}
