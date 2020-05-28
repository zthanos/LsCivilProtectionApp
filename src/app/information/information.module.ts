import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InformationRoutingModule } from "./information-routing.module";
import { InformationComponent } from "./information.component";
import { EodyDetailComponent } from "./details/eody-details.component";
import { InfoDetailsComponent } from "./info-details/info-details.component";
import { InfoSlidesService } from "./info-slides.service";
import { InfoSlideComponent } from "./info-slide/info-slide.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InformationRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        InformationComponent,
        EodyDetailComponent,
        InfoDetailsComponent,
        InfoSlideComponent
    ],
    providers:[InfoSlidesService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InformationModule { }
