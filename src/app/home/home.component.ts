import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from "@angular/core";

import { MapboxViewApi, Viewport as MapboxViewport, MapboxMarker } from "nativescript-mapbox";
import { AppData } from "../shared/helpers/appdata";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    mapPrepared = false;
    bannerImage = "~/app/assets/images/banner_112.png";
    BackgroundColor = 'black';
    private map: MapboxViewApi;
    cities: { index: number, name: string, city: string, state: string, temp: string, img: string }[] = [
        { index: 0, name: "Banff, AB", city: "Banff", state: "Alberta, Canada", temp: "21°C", img: "~/assets/images/backgrounds/korydallos-dimarxeio.png" },
    ];

    city = this.cities[0].city;
    state = this.cities[0].state;
    temp = this.cities[0].temp;
    img = this.cities[0].img;


    constructor(private page: Page ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = false;

    }
    ngOnDestroy(){
     //   this.map.destroy();
    }

    onMapReady(args): void {
        if (!this.mapPrepared) {
            this.map = args.map;
            const markers = MapMarkers.getMarkers();
            console.log("Markers :", markers);
            this.map.addMarkers([
                {
                    id: 1,
                    lat: 37.981139,
                    lng: 23.645790,
                    title: '1. Δημαρχείο Κορυδαλλού ',
                    subtitle: 'Γρ. Λαμπράκη 240',
                    selected:true
                }
             
            ]);
        }
        this.mapPrepared = true;

        // Use this if you want to track the user on the map
        // this.map.trackUser({
        //   mode: "FOLLOW_WITH_HEADING",
        //   animated: true
        // });
    }

}


export class MapMarkers {
    static data: [
        { type: "medical", title: "1. Δημαρχείο Κορυδαλλού - Γρ. Λαμπράκη 240", lat: 37.981139, lon: 23.645790 },
        { type: "medical", title: "2. Κλειστό Γήπεδο Θεόδωρος Πούτος- Σολωμού 80", lat: 37.982625, lon: 23.649081 },
        { type: "medical", title: "3. Κλειστό Γήπεδο", lat: 37.987986, lon: 23.645024 },
        { type: "medical", title: "4. ΕΑΚ Κορυδαλλού- Πλαταιών", lat: 37.982519, lon: 23.651323 },
        { type: "medical", title: "5. Δημοτικό Γυμναστήριο - Κουντουριώτου 25", lat: 37.9790, lon: 23.6550 }
    ]

    static getMarkers(): MapboxMarker[] {
        const markers = [];
        let idx = 1;
        this.data.forEach(f => {
            const mark = {
                id: idx,
                lat: f.lat,
                lng: f.lon,
                title: f.title,
                subtitle: 'Such an awesome little conference'
            };
            markers.push(mark);
            idx++;
        });
        return markers;
    }
}