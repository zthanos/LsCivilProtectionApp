import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

// import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";

// import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
// import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient } from "@angular/common/http";

import { registerElement } from "nativescript-angular/element-registry";
import { DataService } from "./shared/data.service";
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

import { BottomBarModule } from "./bottomBar/bottomBar.module";
import { TabNavigationModule } from "./tab-navigation/tab-navigation.module";
import { NSModuleFactoryLoader } from "nativescript-angular";
import { enable as traceEnable, addCategories } from "tns-core-modules/trace";

traceEnable();

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log("### ErrorHandler Error: " + error.toString());
        console.log("### ErrorHandler Stack: " + error.stack);
    }
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        TabNavigationModule,
        // NativeScriptFormsModule,
        // NativeScriptUICalendarModule,
        // NativeScriptUIChartModule,
        // NativeScriptUIDataFormModule,
        // NativeScriptUIAutoCompleteTextViewModule,
        // NativeScriptUIGaugeModule
        BottomBarModule

    ],
    declarations: [
        AppComponent
    ],
    providers: [
        HttpClient, 
        DataService,
        { provide: ErrorHandler, useClass: MyErrorHandler }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
