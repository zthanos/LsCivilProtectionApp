import { Component, OnInit } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import { Item, Category } from "../shared/models/eody.model";
import { DataService } from "../shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { Router, ActivatedRoute } from "@angular/router";

declare const IQKeyboardManager: any;

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
    selector: "Eody",
    moduleId: module.id,
    templateUrl: "./information.component.html",
    styleUrls: ["./information.component.css"]
})
export class InformationComponent implements OnInit {
    searching = false;
    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    items: Array<Item>;
    categories: Array<Category>;
    
    news: DataItem[];

    actionAndroid;

    constructor(private activeRoute: ActivatedRoute, private routerExtensions: RouterExtensions, private dataService: DataService) {
        this.actionAndroid = isAndroid;
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
    }
   
    showItem(itemId) {
        console.log(`Tapped on ${itemId}`); 
        console.log(this.activeRoute);
        console.log(this.activeRoute.routeConfig);
        
        this.routerExtensions.navigate(["../detail/" + itemId, 
        {relativeTo: this.activeRoute},
        {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
    }

    categoryIcon(itemCategory) {
        switch (itemCategory) {
            case "Burger":
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
                break;
            case "Beer":
                return String.fromCharCode(0xf0fc); //"fa-beer";
                break;
            case "Pancake":
                return String.fromCharCode(0xf0f4); //"fa-coffee";
                break;
            case "Cake":
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
                break;
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
                break;
        }
    }

    ngOnInit(): void { }
}
