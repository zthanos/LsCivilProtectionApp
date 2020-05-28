import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InformationComponent } from "./information.component";
import { EodyDetailComponent } from "./details/eody-details.component";
import { InfoDetailsComponent } from "./info-details/info-details.component";

const routes: Routes = [
    { path: "", redirectTo: "information" },
    { path: "information", component: InformationComponent },
    { path: "detail/:id", component: EodyDetailComponent },
    { path: "infodetails", component: InfoDetailsComponent },
     
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InformationRoutingModule { }
