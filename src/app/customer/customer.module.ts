import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerComponent} from "./customer.component";
import {I18nModule} from "../shared/i18n/i18n.module";
import {SmartadminWidgetsModule} from "../shared/widgets/smartadmin-widgets.module";
import {TabsModule} from "ng2-bootstrap";
import {NavigationModule} from "../shared/layout/navigation/navigation.module";

@NgModule({
    imports: [
        CommonModule,
        I18nModule,
        SmartadminWidgetsModule,
        TabsModule,
        NavigationModule
    ],
    declarations: [CustomerComponent]
})
export class CustomerModule {
}
