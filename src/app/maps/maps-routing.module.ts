import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { MapsComponent } from "./maps.component";

const routes: Routes = [
    { path: "", redirectTo: "mapview" },
    { path: "mapview", component: MapsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapsRoutingModule {}
