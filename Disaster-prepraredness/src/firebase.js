import { initializeApp } from "firebase/app";
import { Database } from "react-bootstrap-icons";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyAAGuL2x353vz0tdWwD5pKjRBI6X9u2R7g",
  authDomain: "disaster-prepraredness-735c1.firebaseapp.com",
  projectId: "disaster-prepraredness-735c1",
  storageBucket: "disaster-prepraredness-735c1.firebasestorage.app",
  messagingSenderId: "407323134396",
  appId: "1:407323134396:web:de03b640a2cacab94543b9",
  databaseURL : "https://disaster-prepraredness-735c1-default-rtdb.firebaseio.com",
};

export const app =initializeApp(firebaseConfig);
export const messaging = getMessaging(app);