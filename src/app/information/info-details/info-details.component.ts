import { Component, OnInit } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";
import * as utils from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";

declare const IQKeyboardManager: any;


@Component({
    selector: "info-details",
    moduleId: module.id,
    templateUrl: "./info-details.component.html",
    styleUrls: ["./info-details.component.css"]
})
export class InfoDetailsComponent implements OnInit {


    constructor(private routerExtensions: RouterExtensions,
        private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (!isAndroid) {
            return;
        }
        application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
//            if (this.routerExtensions.router.isActive("information/infodetails/", false)) {
                data.cancel = true; // prevents default back button behavior
                
                this.routerExtensions.router.navigate(["../tabs/default/",
                    { relativeTo: this.activeRoute }
                ]);

  //          }
        });
    }

    onCloseTap(): void {
        this.routerExtensions.back();
    }

    openUrl(url: string) {
        utils.openUrl(url);
    }
}
