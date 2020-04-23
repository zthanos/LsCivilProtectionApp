import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NewsFeed, Source, SourceType } from './models/news-feed.model';
import { DailyWeather } from './models/weather.model';
import { openUrl } from 'tns-core-modules/utils/utils';


@Injectable({
    providedIn: 'root'
})

export class RestApiService {
    constructor(private http: HttpClient) { }

    getTweets(): Observable<NewsFeed[]> {
        const uri = "https://prod-54.westeurope.logic.azure.com:443/workflows/04a8bde8825846bd9ae5e36927656fd1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=W5C_VD3z14vOhYqf1wEgupXH2yDxTLca1QODXccnKHs";
        const payload = {
            searchParams: "(from:GSCP_GR OR from:pepattikis OR from:EMY_HNMS OR from:eody_gr OR from:YpYgGR)"
        };
        return this.http.post(uri, payload).pipe(
            map((m: any[]) => {
                const feeds: Array<NewsFeed> = [];
                m.forEach(t => {
                    const nf = <NewsFeed>{
                        author: t.UserDetails.FullName,
                        profileUrl: t.UserDetails.ProfileImageUrl,
                        userName: t.UserDetails.UserName,
                        title: t.UserDetails.UserName,
                        description: t.TweetText,
                        urlToImage: t.MediaUrls[0],
                        url: "",
                        originalMessage: t.OriginalTweet ? t.OriginalTweet.TweetText : t.TweetText,
                        displayImage: t.MediaUrls.length > 0,
                        sourceType: SourceType.Twitter,
                        publishedAt: t.CreatedAt,
                        source: <Source>{ id: t.TweetId, name: t.UserDetails.FullName }
                    };
                    feeds.push(nf);
                });
                return feeds;
            }));
    }

    getWeather(): Observable<DailyWeather[]> {
        const apiuri = "https://api.openweathermap.org/data/2.5/forecast?q=korydallos,gr&appid=1987914432fb4a4dec6a7505daa91d45&lang=el&units=metric"
        return this.http.get<any>(apiuri).pipe(
            map(r => {
                let datekey = "";
                let response = new Array<DailyWeather>();
                if (r != undefined) {
                    r.list.forEach(f => {
                        const dw = {
                            Description: f.weather[0].description,
                            CurrentDate: WeatherUtils.getDateTimeString(f.dt_txt),
                            Icon: WeatherUtils.getWeatherIcon(f.weather[0].icon),
                            Date_string: WeatherUtils.getDayOfTheWeek(f.dt),
                            Temprature: Math.round(f.main.temp) + "°C"
                        } as DailyWeather;
                        if (datekey != WeatherUtils.getDateTimeString(f.dt_txt)) {
                            response.push(dw);
                            datekey = WeatherUtils.getDateTimeString(f.dt_txt);
                        }
                    })
                }
                return response;
            })
        );
    }

    getCityPolygon(): Observable<any> {
        return this.http.get<any>('https://nominatim.openstreetmap.org/search?q= municipality of Korydallos,attiki&format=json&polygon=1');
    }

    getCityPharmacies(): Observable<any> {
        const apiuri = 'https://nominatim.openstreetmap.org/search?q= Korydallos[pharmacies], attiki&format=json&polygon=1';
        return this.http.get<any>(apiuri).pipe(
            map(m => {
                let respone = [];
                m.forEach(f => {
                    let item = {
                        id: f.place_id,
                        lat: f.lat,
                        lng: f.lon,
                        title: f.type,
                        subtitle: f.display_name,
                        icon: f.icon
                    };
                    respone.push(item);
                });
                return respone;
            }))
    }

    getCityAmenity(amenity: string): Observable<any> {
        
        const apiuri = 'https://nominatim.openstreetmap.org/search?q=Korydallos['+amenity+'], attiki&format=json&polygon=1';
        return this.http.get<any>(apiuri).pipe(
            map(m => {
                let respone = [];
                m.forEach(f => {
                    let item = {
                        id: f.place_id,
                        lat: f.lat,
                        lng: f.lon,
                        title: this.getMarkerDescription(amenity),
                        subtitle: f.display_name,
                        color:'green',    
                        //icon: 'pharmacy-512.png',
                        iconPath: '~/app/assets/images/pharmacy-512.png',
                        onTap: function(f) { 
                            console.log("This marker was tapped"); 
                           // this.gotoGoogleMaps(f.display_name);
                        },
                        onCalloutTap: function(f) { console.log("The callout of this marker was tapped"); }
                    };
                    respone.push(item);
                });
                return respone;
            }))
    }


    gotoGoogleMaps(address: string ){
        //openUrl("https://www.google.com/maps/search/?api=1&query="+address);
    }
    getCityAmenities(amenities: string[]): Observable<any> {
        let services = [];
        amenities.forEach(amenity => {
            services.push(this.getCityAmenity(amenity));
        });
        return forkJoin(services);
    }

    getMarkerDescription(marker:string ){
        switch(marker){
            case 'pharmacies' : return 'Φαρμακείο';
            case 'banks': return 'Τράπεζα'
            case 'supermarkets': return 'Super Market'; 
            case 'doctors': return 'Ιατρός'; 
            case 'police': return 'Αστυνομικό Τμήμα';
            case 'taxi': return 'Ταξί';
            default : return marker;
        }
    }
}

class WeatherUtils {
    static getWeatherIcon(code: string) {
        return "https://openweathermap.org/img/wn/" + code.replace('n', 'd') + "@2x.png";
    }
    static getDateTimeString(dt) {
        const ntstr = dt.split(' ')[0].split('-');
        return ntstr[2] + "-" + ntstr[1] + "-" + ntstr[0]
    }

    static getDayOfTheWeek(dt: any) {
        var days = ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'];
        const d = new Date(dt * 1000);
        return days[d.getDay()];
    }
}
