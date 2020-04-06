import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../shared/rest-api.service";
import { NewsFeed, SourceType, Source } from "../shared/models/news-feed.model";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import { AppData } from "../shared/helpers/appdata";
import { Page } from "tns-core-modules/ui/page/page";
declare const IQKeyboardManager: any;
@Component({
    selector: "Socials",
    templateUrl: "./socials.component.html",
    styleUrls: ["./socials.component.css"]
})
export class SocialsComponent implements OnInit {
    news: NewsFeed[];
    actionAndroid;
    BackgroundColor : string = AppData.GetTabColor(0);

    constructor(private page: Page, private restApi : RestApiService) {
        this.actionAndroid = isAndroid;
        this.page.actionBarHidden = false;
        // this.news = this.allNews.filter((e) => {
        //     return e.urlToImage && e.title && e.description && e.source.name;
        // });

        if (isIOS) {
            var keyboard = IQKeyboardManager.sharedManager();
            keyboard.shouldResignOnTouchOutside = true;
        }
    }

    ngOnInit(): void {
        this.news = [];
        sampleTweets.data.forEach(t => {
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
                this.news.push(nf);
            });
        // this.restApi.getTweets().subscribe(s=> {
        //     this.news = s
        // });
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    
}
class sampleTweets {
    static data = 

     [
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \n\nΌσοι έχουν ζώα συντροφιάς δεν πρέπει να ανησυχούν. Με τα έως τώρα επιστημονικά δεδομένα, δεν προκύπτει να έ…",
            "TweetId": "1246145975439298560",
            "CreatedAt": "Fri Apr 03 18:42:07 +0000 2020",
            "CreatedAtIso": "2020-04-03T18:42:07.000Z",
            "RetweetCount": 9,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \n\nΌσοι έχουν ζώα συντροφιάς δεν πρέπει να ανησυχούν. Με τα έως τώρα επιστημονικά δεδομένα, δεν προκύπτει να έχουν κάποιο σημαντικό ρόλο στη μετάδοση και διασπορά της νόσου στους ανθρώπους. #COVID19\n https://t.co/d4GljCTSe2",
                "TweetId": "1246144683430088704",
                "CreatedAt": "Fri Apr 03 18:36:59 +0000 2020",
                "CreatedAtIso": "2020-04-03T18:36:59.000Z",
                "RetweetCount": 9,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 14555,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2357,
                    "FriendsCount": 79,
                    "FavouritesCount": 658,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 7274,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9551,
                "FriendsCount": 371,
                "FavouritesCount": 385,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @GSCP_GR: 🔴Ενημέρωση από τον Υφυπουργό Πολιτικής Προστασίας &amp; Διαχείρισης Κρίσεων @nhardalias &amp; τον εκπρόσωπο του @YpYgGR για το νέο #CO…",
            "TweetId": "1246145028600352768",
            "CreatedAt": "Fri Apr 03 18:38:21 +0000 2020",
            "CreatedAtIso": "2020-04-03T18:38:21.000Z",
            "RetweetCount": 5,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                },
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "🔴Ενημέρωση από τον Υφυπουργό Πολιτικής Προστασίας &amp; Διαχείρισης Κρίσεων @nhardalias &amp; τον εκπρόσωπο του @YpYgGR για το νέο #COVIDー19 Καθηγητή @STsiodras\n\n@eody_gr #handshygiene @menoumespiti\n\n Δείτε περισσότερα 🔗 https://t.co/0MF4CNVoCL https://t.co/Yp4F3zNVuh",
                "TweetId": "1246144804305678336",
                "CreatedAt": "Fri Apr 03 18:37:28 +0000 2020",
                "CreatedAtIso": "2020-04-03T18:37:28.000Z",
                "RetweetCount": 5,
                "TweetedBy": "GSCP_GR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUsyCXkXgAY7jOV.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 86951686,
                        "FullName": "Νίκος Γ. Χαρδαλιάς",
                        "UserName": "nhardalias"
                    },
                    {
                        "Id": 1598930275,
                        "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                        "UserName": "YpYgGR"
                    },
                    {
                        "Id": 976133904091533300,
                        "FullName": "Sotirios Tsiodras",
                        "UserName": "STsiodras"
                    },
                    {
                        "Id": 717964915,
                        "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                        "UserName": "eody_gr"
                    },
                    {
                        "Id": 1239125368101113900,
                        "FullName": "Μένουμε Σπίτι",
                        "UserName": "menoumespiti"
                    }
                ],
                "UserDetails": {
                    "FullName": "Civil Protection GR",
                    "Location": "Greece",
                    "Id": 1637650700,
                    "UserName": "GSCP_GR",
                    "FollowersCount": 29430,
                    "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                    "StatusesCount": 3041,
                    "FriendsCount": 206,
                    "FavouritesCount": 646,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "🔴Ενημέρωση από τον Υφυπουργό Πολιτικής Προστασίας &amp; Διαχείρισης Κρίσεων @nhardalias &amp; τον εκπρόσωπο του @YpYgGR για το νέο #COVIDー19 Καθηγητή @STsiodras\n\n@eody_gr #handshygiene @menoumespiti\n\n Δείτε περισσότερα 🔗 https://t.co/0MF4CNVoCL https://t.co/Yp4F3zNVuh",
            "TweetId": "1246144804305678336",
            "CreatedAt": "Fri Apr 03 18:37:28 +0000 2020",
            "CreatedAtIso": "2020-04-03T18:37:28.000Z",
            "RetweetCount": 5,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUsyCXkXgAY7jOV.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                },
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 29430,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3041,
                "FriendsCount": 206,
                "FavouritesCount": 646,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\nΌσοι έχουν ζώα συντροφιάς δεν πρέπει να ανησυχούν. Με τα έως τώρα επιστημονικά δεδομένα, δεν προκύπτει να έχουν κάποιο σημαντικό ρόλο στη μετάδοση και διασπορά της νόσου στους ανθρώπους. #COVID19\n https://t.co/d4GljCTSe2",
            "TweetId": "1246144683430088704",
            "CreatedAt": "Fri Apr 03 18:36:59 +0000 2020",
            "CreatedAtIso": "2020-04-03T18:36:59.000Z",
            "RetweetCount": 9,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "🚫Περιορισμός κίνησης πολιτών στην παραλιακή ζώνη της Πάτρας και στην παραλία Βόλου\n\n@patrasmunicipal @dimosvolou @perifthessalias @pde_rwg\n \nΠερισσότερα 🔗 https://t.co/JvNMNZZqZV https://t.co/APwyYYtMsE",
            "TweetId": "1246130833523707908",
            "CreatedAt": "Fri Apr 03 17:41:57 +0000 2020",
            "CreatedAtIso": "2020-04-03T17:41:57.000Z",
            "RetweetCount": 8,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUslYNxXQAEkhPv.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1561379504,
                    "FullName": "ΔΗΜΟΣ ΠΑΤΡΕΩΝ",
                    "UserName": "patrasmunicipal"
                },
                {
                    "Id": 1032277887645376500,
                    "FullName": "Δήμος Βόλου",
                    "UserName": "dimosvolou"
                },
                {
                    "Id": 2202989900,
                    "FullName": "ΠΕΡΙΦΕΡΕΙΑ ΘΕΣΣΑΛΙΑΣ",
                    "UserName": "perifthessalias"
                },
                {
                    "Id": 519399597,
                    "FullName": "Περιφέρεια Δ.Ελλάδας",
                    "UserName": "pde_rwg"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 29430,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3041,
                "FriendsCount": 206,
                "FavouritesCount": 646,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Ενδυναμώνουμε το ρόλο της Πρωτοβάθμιας Φροντίδας Υγείας #covid19Gr \n-ΔΩΡΕΑΝ υπηρεσίες για την καλύτερη φροντίδα των ασθενών…",
            "TweetId": "1246101206558281729",
            "CreatedAt": "Fri Apr 03 15:44:13 +0000 2020",
            "CreatedAtIso": "2020-04-03T15:44:13.000Z",
            "RetweetCount": 23,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ενδυναμώνουμε το ρόλο της Πρωτοβάθμιας Φροντίδας Υγείας #covid19Gr \n-ΔΩΡΕΑΝ υπηρεσίες για την καλύτερη φροντίδα των ασθενών\n-Δημόσια νοσοκομεία θα μπορούν να συνεργάζονται με ιδιώτες ιατρούς\n-Δίκτυο τηλεσυμβουλευτικής με συνδρομή @MinDigitalGr \n\nΑναλυτικά: https://t.co/mfKC1Ohkdu https://t.co/FS1EjIdl46",
                "TweetId": "1246099960849928192",
                "CreatedAt": "Fri Apr 03 15:39:16 +0000 2020",
                "CreatedAtIso": "2020-04-03T15:39:16.000Z",
                "RetweetCount": 23,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUsFqrxXgAAKHMW.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 923162646056263700,
                        "FullName": "Υπουργείο Ψηφιακής Διακυβέρνησης",
                        "UserName": "MinDigitalGr"
                    }
                ],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 47333,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15800,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7554,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Η «άυλη» συνταγογράφηση είναι μία σημαντική μεταρρύθμιση που αποδεικνύει ότι το ψηφιακό κράτος είναι στην υπηρεσία των…",
            "TweetId": "1246082341543522305",
            "CreatedAt": "Fri Apr 03 14:29:15 +0000 2020",
            "CreatedAtIso": "2020-04-03T14:29:15.000Z",
            "RetweetCount": 168,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Η «άυλη» συνταγογράφηση είναι μία σημαντική μεταρρύθμιση που αποδεικνύει ότι το ψηφιακό κράτος είναι στην υπηρεσία των πολιτών, ειδικά των πιο αδύναμων. Είναι μία πρωτοβουλία από την οποία κερδίζουν όλοι, πολίτες, γιατροί και το δημόσιο σύστημα υγείας. https://t.co/4CZj6bfAdc https://t.co/Ykvbe451Us",
                "TweetId": "1246078752376799234",
                "CreatedAt": "Fri Apr 03 14:15:00 +0000 2020",
                "CreatedAtIso": "2020-04-03T14:15:00.000Z",
                "RetweetCount": 168,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUruD6JU4AAlCA1.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 547343,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6691,
                    "FriendsCount": 210,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Δείτε πως ΠΡΕΠΕΙ να βάζουμε και να βγάζουμε μία μάσκα, τηρώντας τους κανόνες υγιεινής. \nΠάντα με λελογισμένη χρήση, όπου υπά…",
            "TweetId": "1246068818524266503",
            "CreatedAt": "Fri Apr 03 13:35:31 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:35:31.000Z",
            "RetweetCount": 140,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Δείτε πως ΠΡΕΠΕΙ να βάζουμε και να βγάζουμε μία μάσκα, τηρώντας τους κανόνες υγιεινής. \nΠάντα με λελογισμένη χρήση, όπου υπάρχει ανάγκη. \n#covid19 #coronavid19 #mask https://t.co/WHOgzrVZjU",
                "TweetId": "1246024850206003200",
                "CreatedAt": "Fri Apr 03 10:40:48 +0000 2020",
                "CreatedAtIso": "2020-04-03T10:40:48.000Z",
                "RetweetCount": 140,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1246024732656283648/pu/img/t_Sq-waAOaDxucao.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 47333,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15800,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7554,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 7274,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9551,
                "FriendsCount": 371,
                "FavouritesCount": 385,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @GSCP_GR: ⚠️Έκτακτο: Επιδείνωση του καιρού από σήμερα Παρασκευή 03/04 με:\n❗️ισχυρές βροχές🌧️ &amp; καταιγίδες⛈️\n❗️θυελλώδεις ανέμους💨\n❗️χιον…",
            "TweetId": "1246068767336968193",
            "CreatedAt": "Fri Apr 03 13:35:19 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:35:19.000Z",
            "RetweetCount": 25,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "⚠️Έκτακτο: Επιδείνωση του καιρού από σήμερα Παρασκευή 03/04 με:\n❗️ισχυρές βροχές🌧️ &amp; καταιγίδες⛈️\n❗️θυελλώδεις ανέμους💨\n❗️χιονοπτώσεις 🌨️\n\nΑναλυτικά🔗 https://t.co/Xb49HzYDA1\nΟδηγίες προστασίας ℹ️ https://t.co/knMjxGZLXT\n@EMY_HNMS @pyrosvestiki @hellenicpolice https://t.co/TGeaFoYi5t",
                "TweetId": "1246042592048844800",
                "CreatedAt": "Fri Apr 03 11:51:18 +0000 2020",
                "CreatedAtIso": "2020-04-03T11:51:18.000Z",
                "RetweetCount": 25,
                "TweetedBy": "GSCP_GR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUrUw0lUEAAlT63.jpg",
                    "https://pbs.twimg.com/media/EUrUw0pUMAEL3vy.jpg",
                    "https://pbs.twimg.com/media/EUrUw0mUEAAEjN9.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 827844841,
                        "FullName": "EMY",
                        "UserName": "EMY_HNMS"
                    },
                    {
                        "Id": 158003436,
                        "FullName": "Πυροσβεστικό Σώμα",
                        "UserName": "pyrosvestiki"
                    },
                    {
                        "Id": 119014566,
                        "FullName": "Ελληνική Αστυνομία",
                        "UserName": "hellenicpolice"
                    }
                ],
                "UserDetails": {
                    "FullName": "Civil Protection GR",
                    "Location": "Greece",
                    "Id": 1637650700,
                    "UserName": "GSCP_GR",
                    "FollowersCount": 29430,
                    "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                    "StatusesCount": 3041,
                    "FriendsCount": 206,
                    "FavouritesCount": 646,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 7274,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9551,
                "FriendsCount": 371,
                "FavouritesCount": 385,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Σύμφωνα με στοιχεία της ΗΔΙΚΑ, μέσα σε λιγότερο από δύο εβδομάδες οι πολίτες που εγγράφηκαν στην πλατφόρμα https://t.co/VLEF…",
            "TweetId": "1246068727642083329",
            "CreatedAt": "Fri Apr 03 13:35:10 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:35:10.000Z",
            "RetweetCount": 43,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Σύμφωνα με στοιχεία της ΗΔΙΚΑ, μέσα σε λιγότερο από δύο εβδομάδες οι πολίτες που εγγράφηκαν στην πλατφόρμα https://t.co/VLEF0cQ3uV έχουν ξεπεράσει τις 140.000.\nΛεπτομερείς οδηγίες για την ενεργοποίηση της άυλης συνταγογράφησης → https://t.co/5Mb4omHfBy\n@Pierrakakis",
                "TweetId": "1246065240325804033",
                "CreatedAt": "Fri Apr 03 13:21:18 +0000 2020",
                "CreatedAtIso": "2020-04-03T13:21:18.000Z",
                "RetweetCount": 43,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 37141924,
                        "FullName": "Kyriakos Pierrakakis",
                        "UserName": "Pierrakakis"
                    }
                ],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 47333,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15800,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7554,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 7274,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9551,
                "FriendsCount": 371,
                "FavouritesCount": 385,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Σύμφωνα με στοιχεία της ΗΔΙΚΑ, μέσα σε λιγότερο από δύο εβδομάδες οι πολίτες που εγγράφηκαν στην πλατφόρμα https://t.co/VLEF…",
            "TweetId": "1246065521746939905",
            "CreatedAt": "Fri Apr 03 13:22:25 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:22:25.000Z",
            "RetweetCount": 43,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Σύμφωνα με στοιχεία της ΗΔΙΚΑ, μέσα σε λιγότερο από δύο εβδομάδες οι πολίτες που εγγράφηκαν στην πλατφόρμα https://t.co/VLEF0cQ3uV έχουν ξεπεράσει τις 140.000.\nΛεπτομερείς οδηγίες για την ενεργοποίηση της άυλης συνταγογράφησης → https://t.co/5Mb4omHfBy\n@Pierrakakis",
                "TweetId": "1246065240325804033",
                "CreatedAt": "Fri Apr 03 13:21:18 +0000 2020",
                "CreatedAtIso": "2020-04-03T13:21:18.000Z",
                "RetweetCount": 43,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 37141924,
                        "FullName": "Kyriakos Pierrakakis",
                        "UserName": "Pierrakakis"
                    }
                ],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 47333,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15800,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7554,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "ΧΙΟΝΟΠΤΩΣΕΙΣ\nΚυρίως Σάββατο και Κυριακή στα ηπειρωτικά ορεινά (υψόμετρο 900 μ) της κεντρικής και βόρειας χώρας. Θα είναι κατά τόπους πυκνές στην κεντρική Στερεά, τη Θεσσαλία και το Σάββατο στη Δ. Μακεδονία όπου θα χιονίσει και στα ημιορεινά (περίπου πάνω από 600 μ). https://t.co/WQZ4kDPzoH",
            "TweetId": "1246062144438833152",
            "CreatedAt": "Fri Apr 03 13:09:00 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:09:00.000Z",
            "RetweetCount": 5,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1246061999013814276/pu/img/0utwhg0eiJ_TGjZC.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4610,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 99,
                "FriendsCount": 32,
                "FavouritesCount": 68,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "ΘΥΕΛΛΩΔΕΙΣ ΕΩΣ ΠΟΛΥ ΘΥΕΛΛΩΔΕΙΣ ΑΝΕΜΟΙ\nΑνατολικοί, εντάσεως 7 με 9 μποφόρ, θα πνέουν το Σάββατο στα δυτικά και νότια και από το βράδυ στο βόρειο Αιγαίο. \nΤην Κυριακή σταδιακά θα επικρατήσουν Β-ΒΑ οι οποίοι τη Δευτέρα θα φτάσουν στο Αιγαίο τοπικά σε επίπεδο θύελλας (10 μποφόρ) https://t.co/o0p9asMG3Z",
            "TweetId": "1246061406367240193",
            "CreatedAt": "Fri Apr 03 13:06:04 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:06:04.000Z",
            "RetweetCount": 6,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1246061141555425281/pu/img/yeGRNg3H94SBTFtl.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4610,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 99,
                "FriendsCount": 32,
                "FavouritesCount": 68,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "ΕΙΔΙΚΟΤΕΡΑ ΓΙΑ ΤΗΝ ΑΤΤΙΚΗ\nΟι βροχές που θα σημειώνονται από τις πρωινές ώρες του Σαββάτου, μετά το μεσημέρι θα ενταθούν και θα εκδηλωθούν και καταιγίδες. Τα φαινόμενα θα είναι ιδιαιτέρως ισχυρά από τις απογευματινές ώρες του Σαββάτου μέχρι τις προμεσημβρινές ώρες της Κυριακής https://t.co/DuFbrHvlWK",
            "TweetId": "1246060483976859650",
            "CreatedAt": "Fri Apr 03 13:02:24 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:02:24.000Z",
            "RetweetCount": 11,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1246060334105784320/pu/img/CqZKgUOJzjz9fNKO.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4610,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 99,
                "FriendsCount": 32,
                "FavouritesCount": 68,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "RT @ItalyinGreece: Η σημαία μας υψώθηκε στη Βουλή των Ελλήνων, πάνω από το Μνημείο του Αγνώστου Στρατιώτη, μια συγκινητική κίνηση ειλικρινο…",
            "TweetId": "1246060416234594306",
            "CreatedAt": "Fri Apr 03 13:02:08 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:02:08.000Z",
            "RetweetCount": 314,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 4074228269,
                    "FullName": "Italy in Greece",
                    "UserName": "ItalyinGreece"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Η σημαία μας υψώθηκε στη Βουλή των Ελλήνων, πάνω από το Μνημείο του Αγνώστου Στρατιώτη, μια συγκινητική κίνηση ειλικρινούς φιλίας μεταξύ των δύο λαών. Ευχαριστούμε @PressParliament! https://t.co/tDF9uu5B3K",
                "TweetId": "1246040378911920129",
                "CreatedAt": "Fri Apr 03 11:42:31 +0000 2020",
                "CreatedAtIso": "2020-04-03T11:42:31.000Z",
                "RetweetCount": 314,
                "TweetedBy": "ItalyinGreece",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUrTHTVUcAAdIfh.jpg",
                    "https://pbs.twimg.com/media/EUrTHTWUwAE8dyX.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 941440772,
                        "FullName": "Γραφείο Τύπου",
                        "UserName": "PressParliament"
                    }
                ],
                "UserDetails": {
                    "FullName": "Italy in Greece",
                    "Location": "",
                    "Id": 4074228269,
                    "UserName": "ItalyinGreece",
                    "FollowersCount": 2465,
                    "Description": "Official account of the Italian Embassy in the Hellenic Republic",
                    "StatusesCount": 6303,
                    "FriendsCount": 330,
                    "FavouritesCount": 398,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1158636664773861376/T_i1evSj_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @GSCP_GR: ⚠️Έκτακτο: Επιδείνωση του καιρού από σήμερα Παρασκευή 03/04 με:\n❗️ισχυρές βροχές🌧️ &amp; καταιγίδες⛈️\n❗️θυελλώδεις ανέμους💨\n❗️χιον…",
            "TweetId": "1246060229235703808",
            "CreatedAt": "Fri Apr 03 13:01:23 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:01:23.000Z",
            "RetweetCount": 25,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "⚠️Έκτακτο: Επιδείνωση του καιρού από σήμερα Παρασκευή 03/04 με:\n❗️ισχυρές βροχές🌧️ &amp; καταιγίδες⛈️\n❗️θυελλώδεις ανέμους💨\n❗️χιονοπτώσεις 🌨️\n\nΑναλυτικά🔗 https://t.co/Xb49HzYDA1\nΟδηγίες προστασίας ℹ️ https://t.co/knMjxGZLXT\n@EMY_HNMS @pyrosvestiki @hellenicpolice https://t.co/TGeaFoYi5t",
                "TweetId": "1246042592048844800",
                "CreatedAt": "Fri Apr 03 11:51:18 +0000 2020",
                "CreatedAtIso": "2020-04-03T11:51:18.000Z",
                "RetweetCount": 25,
                "TweetedBy": "GSCP_GR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUrUw0lUEAAlT63.jpg",
                    "https://pbs.twimg.com/media/EUrUw0pUMAEL3vy.jpg",
                    "https://pbs.twimg.com/media/EUrUw0mUEAAEjN9.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 827844841,
                        "FullName": "EMY",
                        "UserName": "EMY_HNMS"
                    },
                    {
                        "Id": 158003436,
                        "FullName": "Πυροσβεστικό Σώμα",
                        "UserName": "pyrosvestiki"
                    },
                    {
                        "Id": 119014566,
                        "FullName": "Ελληνική Αστυνομία",
                        "UserName": "hellenicpolice"
                    }
                ],
                "UserDetails": {
                    "FullName": "Civil Protection GR",
                    "Location": "Greece",
                    "Id": 1637650700,
                    "UserName": "GSCP_GR",
                    "FollowersCount": 29430,
                    "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                    "StatusesCount": 3041,
                    "FriendsCount": 206,
                    "FavouritesCount": 646,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "ΙΣΧΥΡΕΣ ΒΡΟΧΕΣ ΚΑΙ ΚΑΤΑΙΓΙΔΕΣ  \nΤα φαινόμενα αναμένεται να είναι ιδιαιτέρως ισχυρά κατά διαστήματα στην Αν. Στερεά, την Εύβοια και τις Σποράδες από το απόγευμα του Σαββάτου, μέχρι το μεσημέρι της Κυριακής. Εξασθένηση των φαινομένων προβλέπεται από το απόγευμα της Κυριακής https://t.co/LLUS3hssYR",
            "TweetId": "1246059918135828480",
            "CreatedAt": "Fri Apr 03 13:00:09 +0000 2020",
            "CreatedAtIso": "2020-04-03T13:00:09.000Z",
            "RetweetCount": 9,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1246059750896177154/pu/img/__zEptBhOun153Xp.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4610,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 99,
                "FriendsCount": 32,
                "FavouritesCount": 68,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "⚠️Έκτακτο: Επιδείνωση του καιρού από σήμερα Παρασκευή 03/04 με:\n❗️ισχυρές βροχές🌧️ &amp; καταιγίδες⛈️\n❗️θυελλώδεις ανέμους💨\n❗️χιονοπτώσεις 🌨️\n\nΑναλυτικά🔗 https://t.co/Xb49HzYDA1\nΟδηγίες προστασίας ℹ️ https://t.co/knMjxGZLXT\n@EMY_HNMS @pyrosvestiki @hellenicpolice https://t.co/TGeaFoYi5t",
            "TweetId": "1246042592048844800",
            "CreatedAt": "Fri Apr 03 11:51:18 +0000 2020",
            "CreatedAtIso": "2020-04-03T11:51:18.000Z",
            "RetweetCount": 25,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUrUw0lUEAAlT63.jpg",
                "https://pbs.twimg.com/media/EUrUw0pUMAEL3vy.jpg",
                "https://pbs.twimg.com/media/EUrUw0mUEAAEjN9.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 827844841,
                    "FullName": "EMY",
                    "UserName": "EMY_HNMS"
                },
                {
                    "Id": 158003436,
                    "FullName": "Πυροσβεστικό Σώμα",
                    "UserName": "pyrosvestiki"
                },
                {
                    "Id": 119014566,
                    "FullName": "Ελληνική Αστυνομία",
                    "UserName": "hellenicpolice"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 29430,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3041,
                "FriendsCount": 206,
                "FavouritesCount": 646,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "Έκτακτο Δελτίο Επικίνδυνων Καιρικών Φαινομένων (ΕΔΕΚΦ)\nΔιαβάστε το έκτακτο Δελτίο . Θα ακολουθήσουν ενημερωτικοί χάρτες και video \nhttps://t.co/ymLddDs2Ot https://t.co/hMTq6DL5hT",
            "TweetId": "1246025664966295553",
            "CreatedAt": "Fri Apr 03 10:44:03 +0000 2020",
            "CreatedAtIso": "2020-04-03T10:44:03.000Z",
            "RetweetCount": 11,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUrFbWwU0AEkdx-.png"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4610,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 99,
                "FriendsCount": 32,
                "FavouritesCount": 68,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "RT @eody_gr: Ο #ΕΟΔΥ στο Γηροκομείο Αθηνών για την προστασία των ηλικιωμένων από την νόσο #COVID19  https://t.co/2grdeGXzza https://t.co/kL…",
            "TweetId": "1246025296119312386",
            "CreatedAt": "Fri Apr 03 10:42:35 +0000 2020",
            "CreatedAtIso": "2020-04-03T10:42:35.000Z",
            "RetweetCount": 4,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ο #ΕΟΔΥ στο Γηροκομείο Αθηνών για την προστασία των ηλικιωμένων από την νόσο #COVID19  https://t.co/2grdeGXzza https://t.co/kLmlxufmGZ",
                "TweetId": "1246022511176953862",
                "CreatedAt": "Fri Apr 03 10:31:31 +0000 2020",
                "CreatedAtIso": "2020-04-03T10:31:31.000Z",
                "RetweetCount": 4,
                "TweetedBy": "eody_gr",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUrCzveUMAEiodV.jpg",
                    "https://pbs.twimg.com/media/EUrCzvoUwAEPoaw.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "Location": "Αγράφων 3-5, Μαρούσι",
                    "Id": 717964915,
                    "UserName": "eody_gr",
                    "FollowersCount": 7274,
                    "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                    "StatusesCount": 9551,
                    "FriendsCount": 371,
                    "FavouritesCount": 385,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 14555,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2357,
                "FriendsCount": 79,
                "FavouritesCount": 658,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        }
    ];

}