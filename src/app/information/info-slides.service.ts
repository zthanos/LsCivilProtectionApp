import { Injectable } from "@angular/core";

@Injectable()
export class InfoSlidesService {
    private slide1 = `<GridLayout row="0" rows="*, 3*" style="background-color:#811a1e">
    <GridLayout width="57%" row="0" horizontalAlignment="center" verticalAlignment="center" >
        <StackLayout>
            <Label class="lobster-regular carousel-item-head btn" style="font-size:18;font-weight:bold;color:white" text="Απινιδοτές" textWrap="true"></Label>
            <Label class="opensans-regular carousel-item-desc"  style="font-size:14;color:white" text="Στον Κορυδαλλό υπάρχουν σε 5 διαφορετικά σημεία της πόλης." textWrap="true"></Label>
        </StackLayout>
    </GridLayout>
    <GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center"
    style="background: #ffffff;width: 100%;height: 100%;clip-path: circle(80% at 50% 50%)">
        <Image src="~/app/assets/images/zoll-aed-plus.jpg" height="140"></Image>
    </GridLayout>

</GridLayout>
`;

    private slide2 = `<GridLayout row="0" rows="*, 2*">
    <GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
        <StackLayout>
            <Label class="lobster-regular carousel-item-head btn" style="font-size:18;font-weight:bold;color:white" text="Νέος κορωνοϊός Covid-19" textWrap="true"></Label>
            <Label class="opensans-regular carousel-item-desc"  style="font-size:14;color:white" text="Οδηγίες για το κοινό." textWrap="true"></Label>
        </StackLayout>
    </GridLayout>
    <GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
        <Image src="~/app/assets/images/stayhome-754x450.png" height="200"></Image>
    </GridLayout>

</GridLayout>
`;

    private slide3 = `<GridLayout row="0" rows="*, 2*">
    <GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
        <StackLayout>
            <Label class="lobster-regular carousel-item-head btn" style="font-size:18;font-weight:bold;color:white" text="Δασικές πυρκαγίες" textWrap="true"></Label>
            <Label class="opensans-regular carousel-item-desc"  style="font-size:14;color:white" text="Τι πρέπει να κάνουμε σε περίπτωση πυρκαγιάς." textWrap="true"></Label>
        </StackLayout>
    </GridLayout>
    <GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
        <Image src="~/app/assets/images/dasikes_pyrkagies_1.png" height="200"></Image>
    </GridLayout>
</GridLayout>
`;

private slide4 = `<GridLayout row="0" rows="*, 2*">
    <GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
        <StackLayout>
            <Label class="lobster-regular carousel-item-head btn" style="font-size:18;font-weight:bold;color:white" text="Σεισμός" textWrap="true"></Label>
            <Label class="opensans-regular carousel-item-desc"  style="font-size:14;color:white" text="Τι πρέπει να κάνουμε σε περίπτωση σεισμού." textWrap="true"></Label>
        </StackLayout>
    </GridLayout>
    <GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
        <Image src="~/app/assets/images/seismoi_0.png" height="200"></Image>
    </GridLayout>
</GridLayout>
`;
    private slides;
    constructor() {
        this.slides = [this.slide1, this.slide2, this.slide3, this.slide4];
    }

    getSlides(): any {
        return this.slides;
    }
}
