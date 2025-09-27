importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAAGuL2x353vz0tdWwD5pKjRBI6X9u2R7g",
  authDomain: "disaster-prepraredness-735c1.firebaseapp.com",
  projectId: "disaster-prepraredness-735c1",
  storageBucket: "disaster-prepraredness-735c1.firebasestorage.app",
  messagingSenderId: "407323134396",
  appId: "1:407323134396:web:de03b640a2cacab94543b9",
  databaseURL : "https://disaster-prepraredness-735c1-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});