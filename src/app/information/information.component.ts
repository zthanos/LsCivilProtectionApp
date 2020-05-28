import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { screen, isAndroid, device } from "tns-core-modules/platform";
import { Router, ActivatedRoute } from "@angular/router";

import { Page, ContentView } from "tns-core-modules/ui/page";

import { RouterExtensions } from "nativescript-angular";
import { InfoSlidesService } from "./info-slides.service";
import { Builder } from "tns-core-modules/ui/builder";
import { DataService } from "../shared/data.service";
import { RestApiService } from "../shared/rest-api.service";

declare var android: any;

@Component({
    selector: "Eody",
    moduleId: module.id,
    templateUrl: "./information.component.html",
    styleUrls: ["./information.component.css"]
})
export class InformationComponent implements OnInit {
    data = [];


    @ViewChild('slideContent', { static: true }) slideElement: ElementRef;
    private slideView: ContentView;
    selectedSlide = 0;
    constructor(
        private page: Page,
        private nav: RouterExtensions,
        private slidesService: InfoSlidesService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private dataService: DataService,
        private restApi: RestApiService
    ) {
    }

    ngOnInit() {
        this.restApi.getInformationData().subscribe(s => {
            this.data = s
        });
    }
    openDetails(args) {
        var dataItem = args.object.bindingContext;
        this.router.navigate([dataItem.action,
        { relativeTo: this.activeRoute },
        ]);
    }



}
