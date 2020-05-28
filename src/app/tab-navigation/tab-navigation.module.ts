import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
//Custom Components Section
import { TabNavigationComponent } from "./tab-navigation.component";
import { TabNavigationRoutingModule } from "./tab-navigation-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        TabNavigationRoutingModule
    ],
    declarations: [
        TabNavigationComponent
    ],
    providers: [
        
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabNavigationModule { }