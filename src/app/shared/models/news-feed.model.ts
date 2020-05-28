export interface NewsFeed {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    sourceType : SourceType;
    profileUrl : string;
    userName : string;
    displayImage: boolean;
    originalMessage: string;

}


export interface Source {
    id: string;
    name: string;
}

export enum SourceType{
    Facebook,
    Twitter
}