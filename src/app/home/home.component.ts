import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from "@angular/core";

import { MapboxViewApi, Viewport as MapboxViewport, MapboxMarker } from "nativescript-mapbox";
import { AppData } from "../shared/helpers/appdata";
import { Page, Color } from "tns-core-modules/ui/page/page";
import { RestApiService } from "../shared/rest-api.service";
import { KorydallosBoundaries } from "../shared/data.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    //  @ViewChild("map") public mapbox: ElementRef;

    mapPrepared = false;
    bannerImage = "~/app/assets/images/top_banner.jpg";
    BackgroundColor = 'black';
    private map: MapboxViewApi;
    cities: { index: number, name: string, city: string, state: string, temp: string, img: string }[] = [
        { index: 0, name: "Banff, AB", city: "Banff", state: "Alberta, Canada", temp: "21°C", img: "~/assets/images/backgrounds/korydallos-dimarxeio.png" },
    ];

    city = this.cities[0].city;
    state = this.cities[0].state;
    temp = this.cities[0].temp;
    img = this.cities[0].img;
    restOfTheWeek = [];
    currentDay: any;

    constructor(private page: Page, private restapi: RestApiService) { }

    ngOnInit(): void {
        this.page.actionBarHidden = false;
        this.restapi.getWeather().subscribe(s => {
            this.currentDay = s[0];
            for (let i = 1; i < 7; i++) {
                if (s.length + 1 > i) {
                    this.restOfTheWeek.push(s[i]);
                } else {
                    this.restOfTheWeek.push({ Icon: "", Date_string: "", Temprature: "" });
                }
            }
        });

    }
    ngOnDestroy() {
        // if (this.map != null || this.map == undefined)
        //     this.map.destroy();
    }

    onMapReady(args): void {
        if (!this.mapPrepared) {
            this.map = args.map;

            const markers = MapMarkers.getMarkers();
            //   console.log("Markers :", markers);
            this.map.addPolygon({
                id: 1, // optional, can be used in 'removePolygons'
                fillColor: new Color("magenta"),
                fillOpacity: 0.7,
                // stroke-related properties are only effective on iOS
                strokeColor: new Color("pink"),
                strokeWidth: 8,
                strokeOpacity: 0.5,
                points: [
                    { lat: 23.649157, lng: 37.9984944 }, { lat: 23.6490701, lng: 37.9988487 }, { lat: 23.648642, lng: 37.9991877 }, { lat: 23.6482772, lng: 37.9995259 }, { lat: 23.6478695, lng: 37.999881 }, { lat: 23.6474677, lng: 38.0002212 }, { lat: 23.6468825, lng: 38.0005742 }, { lat: 23.646625, lng: 38.0007433 }, { lat: 23.6463675, lng: 38.0010477 }, { lat: 23.645654, lng: 38.0029854 }, { lat: 23.6438999, lng: 38.0033134 }, { lat: 23.6437282, lng: 38.0032965 }, { lat: 23.642312, lng: 38.0029583 }, { lat: 23.6402521, lng: 38.0026878 }, { lat: 23.640016, lng: 38.0026878 }, { lat: 23.6396512, lng: 38.0027724 }, { lat: 23.6392865, lng: 38.0028062 }, { lat: 23.6389431, lng: 38.0028062 }, { lat: 23.6385354, lng: 38.0028231 }, { lat: 23.6383423, lng: 38.0029414 }, { lat: 23.6380419, lng: 38.0030936 }, { lat: 23.6377115, lng: 38.0031773 }, { lat: 23.6365849, lng: 38.0031705 }, { lat: 23.6363468, lng: 38.0035332 }, { lat: 23.6359176, lng: 38.0034656 }, { lat: 23.6353812, lng: 38.0032796 }, { lat: 23.6350164, lng: 38.0030598 }, { lat: 23.6332139, lng: 38.0030429 }, { lat: 23.6321196, lng: 38.0036854 }, { lat: 23.6318192, lng: 38.0024173 }, { lat: 23.6307506, lng: 38.0013427 }, { lat: 23.6290297, lng: 38.0006419 }, { lat: 23.6287078, lng: 38.0004728 }, { lat: 23.6284933, lng: 38.0002023 }, { lat: 23.6283645, lng: 37.9999148 }, { lat: 23.6281928, lng: 37.9995597 }, { lat: 23.6280212, lng: 37.9992723 }, { lat: 23.6277422, lng: 37.9990863 }, { lat: 23.6274633, lng: 37.9989679 }, { lat: 23.6275277, lng: 37.996516 }, { lat: 23.6270341, lng: 37.9959411 }, { lat: 23.6276564, lng: 37.9952985 }, { lat: 23.6265621, lng: 37.9946221 }, { lat: 23.6249957, lng: 37.9944023 }, { lat: 23.6297593, lng: 37.9905129 }, { lat: 23.6344337, lng: 37.9884155 }, { lat: 23.6347418, lng: 37.9882655 }, { lat: 23.6354316, lng: 37.9879298 }, { lat: 23.636717, lng: 37.9873285 }, { lat: 23.6364119, lng: 37.9869388 }, { lat: 23.6365457, lng: 37.9867675 }, { lat: 23.6373824, lng: 37.9863558 }, { lat: 23.6370477, lng: 37.9859122 }, { lat: 23.6368173, lng: 37.9856044 }, { lat: 23.6373024, lng: 37.9853974 }, { lat: 23.6374726, lng: 37.9853169 }, { lat: 23.6375909, lng: 37.9853067 }, { lat: 23.6376611, lng: 37.9852756 }, { lat: 23.6376718, lng: 37.985222 }, { lat: 23.6376828, lng: 37.9851665 }, { lat: 23.6377071, lng: 37.985137 }, { lat: 23.6377664, lng: 37.9851121 }, { lat: 23.6378485, lng: 37.9851663 }, { lat: 23.6378998, lng: 37.9851534 }, { lat: 23.6379245, lng: 37.9850849 }, { lat: 23.6380582, lng: 37.9850188 }, { lat: 23.639004, lng: 37.9845582 }, { lat: 23.6399182, lng: 37.984113 }, { lat: 23.6401312, lng: 37.9842106 }, { lat: 23.6404102, lng: 37.9842952 }, { lat: 23.6406352, lng: 37.9843312 }, { lat: 23.6407964, lng: 37.9843544 }, { lat: 23.641011, lng: 37.9844051 }, { lat: 23.6412685, lng: 37.9845066 }, { lat: 23.6415367, lng: 37.9846081 }, { lat: 23.6417191, lng: 37.9846588 }, { lat: 23.6418586, lng: 37.9846588 }, { lat: 23.6420283, lng: 37.9846334 }, { lat: 23.6419767, lng: 37.9842438 }, { lat: 23.6419619, lng: 37.9841564 }, { lat: 23.6419275, lng: 37.9840485 }, { lat: 23.6418619, lng: 37.9839895 }, { lat: 23.641783, lng: 37.9834181 }, { lat: 23.6417367, lng: 37.9829964 }, { lat: 23.6416656, lng: 37.9826916 }, { lat: 23.6416597, lng: 37.9825675 }, { lat: 23.6416978, lng: 37.9824266 }, { lat: 23.6417474, lng: 37.9823409 }, { lat: 23.6417729, lng: 37.9822923 }, { lat: 23.6419178, lng: 37.9820158 }, { lat: 23.6422032, lng: 37.9814713 }, { lat: 23.6424601, lng: 37.9809812 }, { lat: 23.6427139, lng: 37.9804971 }, { lat: 23.6429464, lng: 37.9800366 }, { lat: 23.6430658, lng: 37.9797972 }, { lat: 23.643261, lng: 37.979422 }, { lat: 23.6433046, lng: 37.9793339 }, { lat: 23.6433284, lng: 37.979295 }, { lat: 23.6433524, lng: 37.9792559 }, { lat: 23.6436288, lng: 37.9787127 }, { lat: 23.6437259, lng: 37.9785218 }, { lat: 23.6439637, lng: 37.9780545 }, { lat: 23.6443141, lng: 37.9773657 }, { lat: 23.6445175, lng: 37.9769771 }, { lat: 23.6446683, lng: 37.9766888 }, { lat: 23.644701, lng: 37.9766264 }, { lat: 23.6447158, lng: 37.976598 }, { lat: 23.6447319, lng: 37.9765673 }, { lat: 23.6449115, lng: 37.9762241 }, { lat: 23.6451019, lng: 37.9758602 }, { lat: 23.6452956, lng: 37.9754901 }, { lat: 23.6454798, lng: 37.9751381 }, { lat: 23.6457128, lng: 37.9746928 }, { lat: 23.6457277, lng: 37.9746642 }, { lat: 23.6457676, lng: 37.9745882 }, { lat: 23.6460927, lng: 37.9739669 }, { lat: 23.6461696, lng: 37.9738198 }, { lat: 23.6464499, lng: 37.9732842 }, { lat: 23.6465572, lng: 37.9730791 }, { lat: 23.6466688, lng: 37.9728659 }, { lat: 23.6468036, lng: 37.9726082 }, { lat: 23.6469159, lng: 37.9723937 }, { lat: 23.6470282, lng: 37.9721789 }, { lat: 23.6471525, lng: 37.9719414 }, { lat: 23.6473391, lng: 37.9715848 }, { lat: 23.6475107, lng: 37.9712569 }, { lat: 23.6476943, lng: 37.970906 }, { lat: 23.6478769, lng: 37.970557 }, { lat: 23.6487105, lng: 37.9708303 }, { lat: 23.6493964, lng: 37.9710274 }, { lat: 23.6497827, lng: 37.9711377 }, { lat: 23.6502428, lng: 37.971269 }, { lat: 23.6508383, lng: 37.9712999 }, { lat: 23.6514314, lng: 37.9713306 }, { lat: 23.6514745, lng: 37.9713338 }, { lat: 23.6526463, lng: 37.9713885 }, { lat: 23.6529529, lng: 37.9714016 }, { lat: 23.6531546, lng: 37.9714982 }, { lat: 23.6535474, lng: 37.9717052 }, { lat: 23.6539924, lng: 37.9719379 }, { lat: 23.6542842, lng: 37.9720541 }, { lat: 23.6553079, lng: 37.9724764 }, { lat: 23.6563854, lng: 37.9729106 }, { lat: 23.656408, lng: 37.9728661 }, { lat: 23.657101, lng: 37.9729871 }, { lat: 23.6580755, lng: 37.9731304 }, { lat: 23.6580589, lng: 37.9737707 }, { lat: 23.6580434, lng: 37.9743641 }, { lat: 23.6580279, lng: 37.9749625 }, { lat: 23.6580146, lng: 37.9754736 }, { lat: 23.657999, lng: 37.9759883 }, { lat: 23.6579739, lng: 37.9768918 }, { lat: 23.6579793, lng: 37.9769343 }, { lat: 23.6580058, lng: 37.9769764 }, { lat: 23.6582666, lng: 37.9773532 }, { lat: 23.65867, lng: 37.9779119 }, { lat: 23.6587194, lng: 37.9779821 }, { lat: 23.6591552, lng: 37.9786059 }, { lat: 23.6594506, lng: 37.9790167 }, { lat: 23.6595107, lng: 37.9791018 }, { lat: 23.6598291, lng: 37.9795632 }, { lat: 23.6600866, lng: 37.979951 }, { lat: 23.6605642, lng: 37.9797727 }, { lat: 23.6609153, lng: 37.97965 }, { lat: 23.6614072, lng: 37.9794675 }, { lat: 23.6615817, lng: 37.9794028 }, { lat: 23.6624042, lng: 37.9790977 }, { lat: 23.6629464, lng: 37.9788873 }, { lat: 23.6633694, lng: 37.9787195 }, { lat: 23.6636554, lng: 37.978617 }, { lat: 23.6637869, lng: 37.9786953 }, { lat: 23.6642955, lng: 37.9794234 }, { lat: 23.6648962, lng: 37.9803367 }, { lat: 23.6645789, lng: 37.9811502 }, { lat: 23.663885, lng: 37.9828874 }, { lat: 23.6638153, lng: 37.9829544 }, { lat: 23.6637574, lng: 37.9829209 }, { lat: 23.6635981, lng: 37.9829785 }, { lat: 23.6635669, lng: 37.9829898 }, { lat: 23.6628219, lng: 37.9832104 }, { lat: 23.6625223, lng: 37.9833128 }, { lat: 23.6624166, lng: 37.9833481 }, { lat: 23.6622628, lng: 37.983409 }, { lat: 23.6620447, lng: 37.983522 }, { lat: 23.6618847, lng: 37.9835996 }, { lat: 23.6617307, lng: 37.9836722 }, { lat: 23.6616959, lng: 37.9836861 }, { lat: 23.6612011, lng: 37.9838669 }, { lat: 23.660451, lng: 37.9841367 }, { lat: 23.6596978, lng: 37.9844115 }, { lat: 23.6590329, lng: 37.9846663 }, { lat: 23.6581859, lng: 37.9849812 }, { lat: 23.6580821, lng: 37.9849964 }, { lat: 23.6579659, lng: 37.9850134 }, { lat: 23.657362, lng: 37.9852317 }, { lat: 23.6564887, lng: 37.9855676 }, { lat: 23.6555853, lng: 37.9859273 }, { lat: 23.6547135, lng: 37.9862638 }, { lat: 23.6539061, lng: 37.9865771 }, { lat: 23.654129, lng: 37.9869729 }, { lat: 23.6529729, lng: 37.9874363 }, { lat: 23.6522143, lng: 37.9877914 }, { lat: 23.6514049, lng: 37.9884771 }, { lat: 23.6510527, lng: 37.9887913 }, { lat: 23.6506194, lng: 37.9891741 }, { lat: 23.6503346, lng: 37.9894285 }, { lat: 23.6499398, lng: 37.9897464 }, { lat: 23.649536, lng: 37.9900984 }, { lat: 23.6491364, lng: 37.9904516 }, { lat: 23.6487496, lng: 37.9907847 }, { lat: 23.6485129, lng: 37.9909892 }, { lat: 23.6483777, lng: 37.9911061 }, { lat: 23.6480804, lng: 37.9913967 }, { lat: 23.6466679, lng: 37.9929987 }, { lat: 23.646861, lng: 37.9937267 }, { lat: 23.6470756, lng: 37.9945722 }, { lat: 23.64714, lng: 37.9947743 }, { lat: 23.647376, lng: 37.9950956 }, { lat: 23.6475477, lng: 37.9951802 }, { lat: 23.6479554, lng: 37.9952148 }, { lat: 23.6482558, lng: 37.9954507 }, { lat: 23.6484918, lng: 37.9957559 }, { lat: 23.6486624, lng: 37.9960603 }, { lat: 23.6486635, lng: 37.9968373 }, { lat: 23.6489853, lng: 37.9976329 }, { lat: 23.6490926, lng: 37.9977843 }, { lat: 23.649157, lng: 37.9984944 }
                ]
            }).then(result => console.log("Mapbox addPolygon done"))
            .catch((error: string) => console.log("mapbox addPolygon error: " + error));;
            this.map.addMarkers(markers);

            this.mapPrepared = true;
        }
        // Use this if you want to track the user on the map
        // this.map.trackUser({
        //   mode: "FOLLOW_WITH_HEADING",
        //   animated: true
        // });
    }

}


export class MapMarkers {
    static data = [
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
                title: 'Απινιδοτής',
                subtitle: f.title
            };
            markers.push(mark);
            idx++;
        });
        return markers;
    }
    static getPolylines(): any[] {
        return [505221792, 505221852, 505221912, 505222416, 505222416, 505221792, 505221852, 505221912, 505222416, 505222416, 505221792, 505221852, 505221912, 505222416, 505222416, 505222152, 505222152, 505222152, 505222116, 505222284, 505222152, 505222392, 505222392, 505222392, 505222380, 505222152, 505222392, 505222392, 505222392, 505222380, 505222020, 505222392, 505222392, 505222392, 505222380, 505222296, 505222296, 505222272, 505222380, 505222380];
    }
}

