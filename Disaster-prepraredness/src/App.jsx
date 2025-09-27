import React from "react";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import Sidebar from "./components/side";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { app } from "./firebase";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import Signup from "./components/Sineup";
import AuthPage from "./components/Loginpage";
import { getFirestore,collection,addDoc,doc,getDoc } from "firebase/firestore";

const firestore = getFirestore(app);   
const auth = getAuth(app);

export default function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging,{vapidkey:"BCXw3PpWzLY7XaFQsI_YmPzBO_scIvpRsf2E8X7NYJql_6KvW1yHTaBV4RCcWqytsKogLphuqj0Vn9XNiIcru5Y"})
      console.log("Token generated:", token);
    } else if(permission === "denied") {
      alert("Unable to get permission to notify");
    }
  }

  useEffect(() => {
requestPermission();
  }, []);


  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <Outlet/>
        
      </div>
    </div>
  );
}
