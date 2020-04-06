import { Component, OnInit } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular";
import { Router, ActivatedRoute } from "@angular/router";

declare const IQKeyboardManager: any;


@Component({
    selector: "info-details",
    moduleId: module.id,
    templateUrl: "./info-details.component.html",
    styleUrls: ["./info-details.component.css"]
})
export class InfoDetailsComponent implements OnInit {
    

    constructor(){
    }
  
    ngOnInit(): void { }
}
