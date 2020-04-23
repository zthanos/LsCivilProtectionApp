import { Component, OnInit, ElementRef, ViewChild, Input, NgZone } from "@angular/core";
import { MapboxViewApi, Viewport as MapboxViewport, MapboxMarker } from "nativescript-mapbox";
import { RestApiService } from "../shared/rest-api.service";
import { MultiSelect, AShowType } from 'nativescript-multi-select';
import { MSOption } from 'nativescript-multi-select';


@Component({
  selector: "Maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  @Input() BackgroundColor: string = "#E6A938";
  private map: MapboxViewApi;
  constructor(private restApi: RestApiService, private zone: NgZone) {
    this._MSelect = new MultiSelect();
    this.predefinedItems = ["moi-a", "moi-b"];
  }
  amenities = ['pharmacies', 'banks', 'supermarkets', 'doctors', 'police', 'taxi'];
  amentitiesDescription = ['Φαρμακεία', 'Τράπεζες', 'Super Markets', 'Ιατροί', 'Αστυνομικό τμήμα', 'Ταξί'];

  private _MSelect: MultiSelect;
  private predefinedItems: Array<any>;
  public selectedItems: Array<any>;

  ngOnInit(): void {
    this.publicpredifefilterList();
  }
  onMapReady(args): void {
    this.map = args.map;
    this.restApi.getCityPolygon().subscribe(s => {
      //this.map.addPolygon(s);
      this.map.setViewport({
        bounds: {
          north: 37.970557,
          east: 23.6249957,
          south: 38.0036854,
          west: 23.6648962
        },
        animated: true
      });
    });
    this.addSelectedMarkers();
  }

  addSelectedMarkers() {
    this.restApi.getCityAmenities(this.predefinedItems).subscribe(s => {
      s.forEach(item => {
        this.map.addMarkers(item);
      });
    });

  }

  public filterList(): any[] {
    let result = [];
    for (let index = 0; index < this.amentitiesDescription.length; index++) {
      const element = { name: this.amentitiesDescription[index], value: this.amenities[index] };
      result.push(element);
    }
    return result;
  }
  publicpredifefilterList() {

    this.predefinedItems = [];
    for (let index = 0; index < this.amentitiesDescription.length; index++) {
      const element = { name: this.amentitiesDescription[index], value: this.amenities[index] };
      this.predefinedItems.push(this.amenities[index]);
    }
  }

  public onSelectTapped(): void {
    const options: MSOption = {
      title: "Επιλογή",
      confirmButtonText: 'Επιλογή',
      cancelButtonText: 'Ακύρωση',
      items: this.filterList(),
      selectedItems: this.predefinedItems,
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: selectedItems => {
        this.zone.run(() => {
          this.selectedItems = selectedItems;
          this.predefinedItems = selectedItems;
          this.map.removeMarkers();
          this.addSelectedMarkers();
        })
      },
      onItemSelected: selectedItem => {
        console.log("SELECTED ITEM => ", selectedItem);
      },
      onCancel: () => {
        console.log('CANCEL');
      },
      android: {
        titleSize: 25,
        cancelButtonTextColor: "#252323",
        confirmButtonTextColor: "#70798C",
      },
      ios: {
        cancelButtonBgColor: "#252323",
        confirmButtonBgColor: "#70798C",
        cancelButtonTextColor: "#ffffff",
        confirmButtonTextColor: "#ffffff",
        showType: AShowType.TypeBounceIn
      }
    };

    this._MSelect.show(options);
  }
}
