importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDgkKVEA8UVa6pVEBg0P_eOAAFLqbprdO0",
  authDomain: "covid-19-tracker-8e88c.firebaseapp.com",
  projectId: "covid-19-tracker-8e88c",
  storageBucket: "covid-19-tracker-8e88c.appspot.com",
  messagingSenderId: "647865977663",
  appId: "1:647865977663:web:e3de4695e2b2c6d30b618a",
  measurementId: "G-5TXFS65EGJ",
});

const messaging = firebase.messaging();

// Both of them ain't working

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler((payload) => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    icon: "/icon/android-icon-36x36.png",
  };
  registration.showNotification(title, options);
});

// messaging.onBackgroundMessage(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
