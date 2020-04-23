import { Component, OnInit } from "@angular/core";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { messaging, Message } from "nativescript-plugin-firebase/messaging";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {
  
    ngOnInit() {
        console.log(`Notifications enabled? ${messaging.areNotificationsEnabled()}`);
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(
            () => {
                console.log("!!!!!!!!!!!!!firebase.init done");
            },
            error => {
                console.log(`############################firebase.init error: ${error}`);
            }
            
        );
        messaging.registerForPushNotifications({
            onPushTokenReceivedCallback: (token: string): void => {
              console.log("!!!!!Firebase plugin received a push token: " + token);
            },
          
            onMessageReceivedCallback: (message: Message) => {
              console.log("Push message received: " + message.title);
            },
          
            // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
            showNotifications: true,
          
            // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
            showNotificationsWhenInForeground: true
          }).then(() => console.log("Registered for push"));
    }
}
