import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NewsFeed, Source, SourceType } from './models/news-feed.model';


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
                        originalMessage: t.OriginalTweet?t.OriginalTweet.TweetText:t.TweetText,
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

    getWeather(): Observable<any>{
        const apiuri = "https://api.openweathermap.org/data/2.5/forecast?q=korydallos,gr&appid=1987914432fb4a4dec6a7505daa91d45&lang=el"
        return this.http.get<any>(apiuri);
      }
 
}
