/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {PointOfSaleComponent} from "./sale/pointofsale/pointofsale.component";
import {CustomerComponent} from "./customer/customer.component";
import {ProductsListComponent} from "./product/products-list.component";
import {ProductDetailComponent} from "./product/product-detail.component";

export const routes:Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
          path: '', redirectTo: 'pointofsale', pathMatch: 'full'
      },
      {path: 'pointofsale', component:PointOfSaleComponent,data:{pageTitle: 'Dashboard'}},
      {path: 'customer', component:CustomerComponent,data:{pageTitle: 'Customers Manager'}},
      {path:'products/manager', component: ProductsListComponent, data:{pageTitle: 'Products Manager'}},
      {path:'product/:id', component: ProductDetailComponent, data:{pageTitle: 'Product Details'}}
    ]
  },

  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  {path: '**', redirectTo: 'miscellaneous'}
//
];

export const routing = RouterModule.forRoot(routes);
