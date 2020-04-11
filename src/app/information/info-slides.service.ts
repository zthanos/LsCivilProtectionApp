import { Injectable } from "@angular/core";

@Injectable()
export class InfoSlidesService {
    private slide1 = `<GridLayout row="0" rows="*, 2*, *">
<GridLayout width="57%" row="0" horizontalAlignment="center" verticalAlignment="center">
    <Label class="lobster-regular carousel-item-head" text="Απινιδοτές" textWrap="true"></Label>
</GridLayout>
<GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
    <Image src="~/app/assets/images/zoll-aed-plus.jpg" height="200"></Image>
</GridLayout>
<GridLayout width="49%" row="2" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="Στον Κορυδαλλό υπάρχουν σε 5 διαφορετικά σημεία της πόλης." textWrap="true"></Label>
</GridLayout>
</GridLayout>
`;

    private slide2 = `<GridLayout row="0" rows="*, 2*, *">
<GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
    <Label class="lobster-regular carousel-item-head" text="Νέος κορωνοϊός Covid-19" textWrap="true"></Label>
</GridLayout>
<GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
    <Image src="~/app/assets/images/stayhome-754x450.png" height="200"></Image>
</GridLayout>
<GridLayout width="49%" row="2" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="Οδηγίες για το κοινό" textWrap="true"></Label>
</GridLayout>
</GridLayout>
`;

    private slide3 = `<GridLayout row="0" rows="*, 2*, *">
<GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
    <Label class="lobster-regular carousel-item-head" text="Δασικές πυρκαγίες" textWrap="true"></Label>
</GridLayout>
<GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
    <Image src="~/app/assets/images/dasikes_pyrkagies_1.png" height="200"></Image>
</GridLayout>
<GridLayout width="49%" row="2" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="Τι πρέπει να κάνουμε σε περίπτωση πυρκαγιάς." textWrap="true"></Label>
</GridLayout>
</GridLayout>
`;

private slide4 = `<GridLayout row="0" rows="*, 2*, *">
<GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
    <Label class="lobster-regular carousel-item-head" text="Σεισμός" textWrap="true"></Label>
</GridLayout>
<GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
    <Image src="~/app/assets/images/seismoi_0.png" height="200"></Image>
</GridLayout>
<GridLayout width="49%" row="2" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="Τι πρέπει να κάνουμε σε περίπτωση σεισμού." textWrap="true"></Label>
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
