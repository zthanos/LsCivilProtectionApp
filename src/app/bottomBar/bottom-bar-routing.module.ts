import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { BottomBarComponent } from "./bottomBar.component";

const routes: Routes = [
   // { path: "", redirectTo: "/default",  pathMatch: "full" },
    { path: "default", component: BottomBarComponent },
    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
        //outlet: "homeTab"
    },
    {
        path: "socials",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/socials/socials.module").then((m) => m.SocialsModule),
        //outlet: "socialsTab"
    },
    {
        path: "emergency",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/emergency/emergency.module").then((m) => m.EmergencyModule),
        //outlet: "emergencyTab"
    },
    {
        path: "information",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/information/information.module").then((m) => m.InformationModule),
        //outlet: "informationTab"
    },
    {
        path: "maps",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/maps/maps.module").then((m) => m.MapsModule),
        //outlet: "mapsTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BottomBarRoutingModule { }
