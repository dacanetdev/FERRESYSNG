import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [ProductService]
})
export class ProductsListComponent implements OnInit {

    products: any[]

    errorMessage: any;

    constructor(private productService: ProductService,
     private router:Router) {
    }

    ngOnInit() {


    }

    editProductos(event){
        console.log(event);

        let id = event.children[0].innerText;

        this.router.navigate(['/product',id]);
    }

}
