export interface AzureTweetsModel {
    TweetText:            string;
    TweetId:              string;
    CreatedAt:            string;
    CreatedAtIso:         Date;
    RetweetCount:         number;
    TweetedBy:            string;
    MediaUrls:            string[];
    TweetInReplyToUserId: string;
    Favorited:            boolean;
    UserMentions:         UserMention[];
    OriginalTweet?:       Body | null;
    UserDetails:          UserDetails;
}


export interface UserDetails {
    FullName:        string;
    Location:        Location;
    Id:              number;
    UserName:        string;
    FollowersCount:  number;
    Description:     string;
    StatusesCount:   number;
    FriendsCount:    number;
    FavouritesCount: number;
    ProfileImageUrl: string;
}



export interface UserMention {
    Id:       number;
    FullName: string;
    UserName: string;
}
