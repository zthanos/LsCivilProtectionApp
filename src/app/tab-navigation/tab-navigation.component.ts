import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view/tab-view";

@Component({
    moduleId: module.id,
    selector: "tabs-page",
    templateUrl: "./tab-navigation.component.html"
})
export class TabNavigationComponent implements OnInit {
    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
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
        //console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
    }

}