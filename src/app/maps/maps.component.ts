import { Component, OnInit, ElementRef, ViewChild, Input } from "@angular/core";
import { MapboxViewApi, Viewport as MapboxViewport } from "nativescript-mapbox";

@Component({
    selector: "Maps",
    templateUrl: "./maps.component.html",
    styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
    @Input() BackgroundColor : string = "#E6A938";
    private map: MapboxViewApi;
    constructor() { }

    ngOnInit(): void {
    }

    onMapReady(args): void {
        this.map = args.map;
        this.map.addMarkers([
              {
                id: 1,
                lat: 42.624189,
                lng: 23.372106,
                title: 'DevReach 2017',
                subtitle: 'Such an awesome little conference',
                onTap: () => {
                  console.log("DevReach 2017 was tapped");
                },
                onCalloutTap: () => {
                  console.log("DevReach 2017 callout tapped");
                }
              }
            ]
        );
    
        // Use this if you want to track the user on the map
        // this.map.trackUser({
        //   mode: "FOLLOW_WITH_HEADING",
        //   animated: true
        // });
      }
   
}
