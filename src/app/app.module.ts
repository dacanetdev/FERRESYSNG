import {NgModule} from '@angular/core';

import {SmartadminModule} from './shared/smartadmin.module'
import {AppComponent} from './app.component';

import {routing} from './app.routing';
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";
import {SaleModule} from "./sale/sale.module";
import {CustomerModule} from "./customer/customer.module";
import {ProductModule} from "./product/product.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        routing,
        SmartadminModule.forRoot(),
        UserModule.forRoot(),
        CustomerModule,
        SaleModule,
        ProductModule,
    ],
    providers: [UserService],
    // entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
