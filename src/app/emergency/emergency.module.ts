import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EmergencyRoutingModule } from "./emergency-routing.module";
import { EmergencyComponent } from "./emergency.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EmergencyRoutingModule
    ],
    declarations: [
        EmergencyComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EmergencyModule { }
