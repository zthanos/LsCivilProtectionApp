import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { screen, isAndroid, device } from "tns-core-modules/platform";
import { Router, ActivatedRoute } from "@angular/router";

import { Page, ContentView } from "tns-core-modules/ui/page";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { GridLayout, GridUnitType, ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { AnimationDefinition, Animation } from 'tns-core-modules/ui/animation';

import * as app from "tns-core-modules/application";
import * as fs from "tns-core-modules/file-system";
import * as builder from "tns-core-modules/ui/builder";
import { RouterExtensions } from "nativescript-angular";
import { InfoSlidesService } from "./info-slides.service";
import { Builder } from "tns-core-modules/ui/builder";

declare var android: any;

@Component({
    selector: "Eody",
    moduleId: module.id,
    templateUrl: "./information.component.html",
    styleUrls: ["./information.component.css"]
})
export class InformationComponent implements OnInit {
    private currentSlideNum: number = 0;
    private slideCount = 4;

    private screenWidth;
    private slidesView: GridLayout;


    @ViewChild('slideContent', { static: true }) slideElement: ElementRef;
    private slideView: ContentView;
    selectedSlide = 0;
    constructor(
        private page: Page,
        private nav: RouterExtensions,
        private slidesService: InfoSlidesService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {
        this.screenWidth = screen.mainScreen.widthDIPs;

        // Span the background under status bar on Android
        // if (isAndroid && device.sdkVersion >= '21') {
        //     var View = android.view.View;
        //     // var window = app.android.startActivity.getWindow();
        //     // window.setStatusBarColor(0x000000);

        //     // var decorView = window.getDecorView();
        //     // decorView.setSystemUiVisibility(
        //     //     View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        //     //     | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        //     //     | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        //     //     | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        // }
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.cssClasses.add("welcome-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        setTimeout(() => {
            this.slideView = this.slideElement.nativeElement;

            this.loadSlides(this.slidesService.getSlides()).then((slides: any) => {
                var row = new ItemSpec(1, GridUnitType.STAR);
                let gridLayout = new GridLayout();
                slides.forEach((element, i) => {
                    GridLayout.setColumn(element, 0);
                    if (i > 0)
                        element.opacity = 0
                    gridLayout.addChild(element);
                });
                gridLayout.addRow(row);
                this.slideView.content = (this.slidesView = gridLayout);
            });
        }, 0);

    }

    private loadSlides(slides) {
        return new Promise(function (resolve, reject) {
            const slideViews = []
            slides.forEach((slide, i) => {
                slideViews.push(Builder.parse(slide))
            });

            resolve(slideViews);
        });
    }

    skipIntro() {
        switch (this.currentSlideNum) {
            case 0: this.showItem(5);
                break;
            case 1: this.showItem(6);
                break;
            case 2: this.showEody();
                break;
            case 3: this.showItem(3);
                break;
            case 4: this.showItem(2);
                break;
        }
        // this.nav.navigate(["/home"], { clearHistory: true });
        // this.nav.navigate(["/home"]);
    }

    onSwipe(args: SwipeGestureEventData) {
        let prevSlideNum = this.currentSlideNum;
        let count = this.slideCount;
        if (args.direction == 2) {
            this.currentSlideNum = (this.currentSlideNum + 1) % count;
        } else if (args.direction == 1) {
            this.currentSlideNum = (this.currentSlideNum - 1 + count) % count;
        } else {
            // We are interested in left and right directions
            return;
        }

        const currSlide = this.slidesView.getChildAt(prevSlideNum);
        const nextSlide = this.slidesView.getChildAt(this.currentSlideNum);

        this.animate(currSlide, nextSlide, args.direction);
    }

    animate(currSlide, nextSlide, direction) {
        nextSlide.translateX = (direction == 2 ? this.screenWidth : -this.screenWidth);
        nextSlide.opacity = 1;
        var definitions = new Array<AnimationDefinition>();
        var defn1: AnimationDefinition = {
            target: currSlide,
            translate: { x: (direction == 2 ? -this.screenWidth : this.screenWidth), y: 0 },
            duration: 500
        };
        definitions.push(defn1);

        var defn2: AnimationDefinition = {
            target: nextSlide,
            translate: { x: 0, y: 0 },
            duration: 500
        };
        definitions.push(defn2);

        var animationSet = new Animation(definitions);
        animationSet.play()
            .then(() => {
                // console.log("Animation finished");
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    itemSelected(item: number) {
        this.selectedSlide = item;
        console.log(item)
    }

    getSliderItemClass(item: number) {
        if (item == this.currentSlideNum)
            return "caro-item-dot caro-item-dot-selected";

        return "caro-item-dot";
    }
    showEody() {
        this.router.navigate(["information/infodetails/",
            { relativeTo: this.activeRoute }
        ]);

    }
    showItem(itemId) {

        this.router.navigate(["information/detail/" + itemId,
        { relativeTo: this.activeRoute },
        ]);
    }
    getButtonDescription(): string {
        return this.currentSlideNum == 0? 'Σημεία & Οδηγίες Χρήσης' :'Περισσότερες Πληροφορίες';
    }



}
