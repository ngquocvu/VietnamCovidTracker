import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localforage.getItem("fcm_token");
  },
  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDgkKVEA8UVa6pVEBg0P_eOAAFLqbprdO0",
        authDomain: "covid-19-tracker-8e88c.firebaseapp.com",
        projectId: "covid-19-tracker-8e88c",
        storageBucket: "covid-19-tracker-8e88c.appspot.com",
        messagingSenderId: "647865977663",
        appId: "1:647865977663:web:e3de4695e2b2c6d30b618a",
        measurementId: "G-5TXFS65EGJ",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();
        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
        //requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          //getting token from FCM
          const fcm_token = await messaging.getToken({
            vapidKey:
              "BNwcvrmeWnKByjZCq-dQqnq9jafe2of8vJuEGtjD-k3O99u4ljrBUHuRJ7jRY5pgXqlvtZmbNk9BMwoc9FPXbQ0",
          });
          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem("fcm_token", fcm_token);
            console.log("fcm token", fcm_token);
            //return the FCM token after saving it
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
