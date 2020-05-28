import { Injectable } from "@angular/core";

@Injectable()
export class InfoSlidesService {
    private slideCreator(title: string, description: string, imgurl: string) {
        return `
            <GridLayout row="0" rows="*, 3*" >
                <GridLayout width="90%" row="0" horizontalAlignment="center" verticalAlignment="center" >
                    <StackLayout>
                        <Label class="lobster-regular  carousel-item-head btn"  style="font-size:22;font-weight:bold;text-align:center;" text="${title}" textWrap="true"></Label>
                        <Label class="opensans-regular carousel-item-desc"  style="font-size:14;" text="${description}" textWrap="true"></Label>
                    </StackLayout>
                </GridLayout>
                <GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
                    <Image src="${imgurl}" height="200"></Image>
                </GridLayout>

            </GridLayout>`
    }
    private slide1 = this.slideCreator('Απινιδωτές',
                                       'Ο Δήμος Κορυδαλλού πρωτοπορεί με δίκτυο απινιδωτών. Αυτή τη στιγμή υπάρχουν εγκατεστημένοι 5 απινιδωτές σε διάφορα σημεία της πόλης.',
                                       '~/app/assets/images/apinidotes.png');

    private slide2 = this.slideCreator('Σημεία Ασύρματης Πρόσβασης',
                                       'Το ασύρματο δίκτυο Wifi προσφέρει στους πολίτες του Κορυδαλλού τη δυνατότητα δωρεάν περιήγησης στο διαδίκτυο και της online επικοινωνίας.',
                                       '~/app/assets/images/wifi.png');

    private slide3 = this.slideCreator('Νέος κορωνοϊός Covid-19',
                                       'Οδηγίες για το κοινό.',
                                       '~/app/assets/images/stayhome1.png');
    private slide4 = this.slideCreator('Δασικές πυρκαγιές',
                                       'Τι πρέπει να κάνουμε σε περίπτωση πυρκαγιάς.',
                                       '~/app/assets/images/fires.png');
    private slide5 = this.slideCreator('Σεισμός',
                                       'Τι πρέπει να κάνουμε σε περίπτωση σεισμού.',
                                       '~/app/assets/images/seismoi.png');


    private slides;
    constructor() {
        this.slides = [this.slide1, this.slide2, this.slide3, this.slide4, this.slide5];
    }

    getSlides(): any {
        return this.slides;
    }
}
