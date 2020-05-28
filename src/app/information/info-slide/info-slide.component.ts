import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';

@Component({
    selector: 'info-slide',
    moduleId: module.id,
    templateUrl: './info-slide.component.html',
    styleUrls: ['./info-slide.component.css']
})
export class InfoSlideComponent implements OnInit {

    @Input('imageToDisplay') imageToDisplay: string;
    @Input('title') title: string;
    @Input('description') description: string;

    actionAndroid;
    labels = [];
    constructor() {
        this.actionAndroid = isAndroid;
    }

    ngOnInit(): void {

    }
}
