import { Component, OnInit } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import * as TNSPhone from 'nativescript-phone'

// declare const IQKeyboardManager: any;

interface DataItem {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

interface Source {
    id: string;
    name: string;
}

@Component({
    selector: "Emergency",
    moduleId: module.id,
    templateUrl: "./emergency.component.html",
    styleUrls: ["./emergency.component.css"]
})
export class EmergencyComponent implements OnInit {

    // TIP: change this array to hit the newsapi.org feed for live data!
    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<YOUR API KEY>

    actionAndroid;

    constructor() {
        this.actionAndroid = isAndroid;

        // if (isIOS) {
        //     var keyboard = IQKeyboardManager.sharedManager();
        //     keyboard.shouldResignOnTouchOutside = true;
        // }
    }
    callPhoneNumber(numberToCall: string){
        TNSPhone.requestCallPermission('You should accept the permission to be able to make a direct phone call.')
        .then(() => TNSPhone.dial(numberToCall, false))
        .catch(() => TNSPhone.dial(numberToCall, true));
    }

    ngOnInit(): void { 
        
    }
}
