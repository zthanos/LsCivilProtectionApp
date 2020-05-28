import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EmergencyRoutingModule } from "./emergency-routing.module";
import { EmergencyComponent } from "./emergency.component";
import { CallerCardComponent } from "../caller-card/caller-card.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EmergencyRoutingModule
    ],
    declarations: [
        EmergencyComponent,
        CallerCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EmergencyModule { }
