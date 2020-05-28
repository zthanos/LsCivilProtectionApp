import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SocialsRoutingModule } from "./socials-routing.module";
import { SocialsComponent } from "./socials.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SocialsRoutingModule,
        NativeScriptUIListViewModule 
    ],
    declarations: [
        SocialsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SocialsModule { }
