import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { PageRoute } from "nativescript-angular/router";
import { Item } from "~/app/shared/models/eody.model";
import { Page } from "tns-core-modules/ui/page/page";
import { DataService } from "~/app/shared/data.service";
import * as application from "tns-core-modules/application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "EodyDetail",
    moduleId: module.id,
    templateUrl: "./eody-details.component.html",
    styleUrls: ['./eody-details.component.css']
})

export class EodyDetailComponent implements OnInit {
    itemId: number;
    item: Item;
    items: Array<Item>;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private activeRoute: ActivatedRoute,
        private page: Page,
        private dataService: DataService) {
        this.items = this.dataService.getItems();        
        this.page.actionBarHidden = false;
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];            
            this.item = this.items.filter(item => item.id == this.itemId)[0];
        });
    }

    ngOnInit(): void {
        if (!isAndroid) {
            return;
          }
          application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
           // if (this.routerExtensions.router.isActive("information/infodetails/", false)) {
              data.cancel = true; // prevents default back button behavior

              this.routerExtensions.router.navigate(["../tabs/default/",
              { relativeTo: this.activeRoute }
              ]);
      
            //}
          });
    }

    toggleLike() {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        } else {
            this.item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }
    onCloseTap(): void {
        this.routerExtensions.back();
    }

}
