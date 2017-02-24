import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {I18nModule} from "../shared/i18n/i18n.module";
import {SmartadminWidgetsModule} from "../shared/widgets/smartadmin-widgets.module";
import {TabsModule} from "ng2-bootstrap";
import {NavigationModule} from "../shared/layout/navigation/navigation.module";
import {ProductsListComponent} from "./products-list.component";
import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import {ProductDetailComponent} from "./product-detail.component";

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    SmartadminWidgetsModule,
    TabsModule,
    NavigationModule,
    SmartadminModule,
    SmartadminDatatableModule
  ],
  declarations: [
      ProductComponent,
      ProductsListComponent,
      ProductDetailComponent
  ]
})
export class ProductModule { }
