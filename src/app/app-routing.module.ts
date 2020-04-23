import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/tabs/default", pathMatch: "full" },
    {
        path: "tabs",
        loadChildren: () => import("~/app/tab-navigation/tab-navigation.module").then(m => m.TabNavigationModule),
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: false })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
