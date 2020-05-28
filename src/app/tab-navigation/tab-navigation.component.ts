import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view/tab-view";
import { DataService } from "../shared/data.service";

@Component({
    moduleId: module.id,
    selector: "tabs-page",
    templateUrl: "./tab-navigation.component.html",
    styleUrls: ["./tab-navigation.component.css"]

})
export class TabNavigationComponent implements OnInit {
    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
        public data: DataService) {
        console.warn('Constructor Current route : ', this.activeRoute);

    }

    ngOnInit() {
        console.warn('Current route : ', this.activeRoute)
        this.routerExtension.navigate([
            {
                outlets: {
                    homeTab: ["home"],
                    socialsTab: ["socials"],
                    emergencyTab: ["emergency"],
                    informationTab: ["information"],
                    mapsTab: ["maps"]
                }
            }]
            , { relativeTo: this.activeRoute });
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
        console.warn('Current route : ', this.activeRoute)
        console.warn('Active Index  : ', args.newIndex)

        this.data.setTabIndex(args.newIndex);
    }

}