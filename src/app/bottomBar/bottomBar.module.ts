import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { BottomBarComponent } from "./bottomBar.component";
import { BottomBarRoutingModule } from "./bottom-bar-routing.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		BottomBarRoutingModule
	],
	declarations: [
		BottomBarComponent
	],
	exports: [
		BottomBarComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class BottomBarModule { }