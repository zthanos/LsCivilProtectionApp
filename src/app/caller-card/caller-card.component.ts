import { Component, OnInit, Input } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import * as TNSPhone from 'nativescript-phone'

interface Source {
    id: string;
    name: string;
}

@Component({
    selector: "caller-card",
    moduleId: module.id,
    templateUrl: "./caller-card.component.html",
    styleUrls: ["./caller-card.component.css"]
})
export class CallerCardComponent implements OnInit {

    @Input("imageToDisplay") imageToDisplay: string;
    @Input("buttonLabel") buttonLabel: string;
    @Input("numberToCall") numberToCall: string;

    actionAndroid;
    labels = [];
    constructor() {
        this.actionAndroid = isAndroid;
    }


    callPhoneNumber() {
        TNSPhone.requestCallPermission('Θα πρέπει να αποδεχτείτε την άδεια για να μπορείτε να πραγματοποιήσετε απευθείας τηλεφωνική κλήση.')
            .then(() => TNSPhone.dial(this.numberToCall, false))
            .catch(() => TNSPhone.dial(this.numberToCall, true));
    }

    ngOnInit(): void {
        this.labels = this.buttonLabel.split(' ');
    }
}
