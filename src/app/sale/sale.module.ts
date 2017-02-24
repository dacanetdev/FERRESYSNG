import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PointOfSaleComponent} from "./pointofsale/pointofsale.component";
import {I18nModule} from "../shared/i18n/i18n.module";
import {ModalModule, ButtonsModule, TooltipModule, DropdownModule, ProgressbarModule, TabsModule,
    AccordionModule, CarouselModule, AlertModule} from 'ng2-bootstrap'
import {SaleItemsComponent} from "./sale-items/sale-items.component";

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
      AccordionModule,
      AlertModule
  ],
  declarations: [PointOfSaleComponent,SaleItemsComponent]
})
export class SaleModule { }
