import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { MapsComponent } from "./maps.component";

const routes: Routes = [
    { path: "", redirectTo: "mapsview" },
    { path: "mapsview", component: MapsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapsRoutingModule {}
