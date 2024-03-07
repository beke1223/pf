import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
   apiKey: "AIzaSyBrXHuYKylc3-SEfv71TtoNWl8R4_Vbl7E",
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
   projectId: "my-portifolio-c3e65",
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: "1:282426099987:web:8c4914878f7a72a32272e6",
   measurementId:process.env.REACT_APP_MEASUREMENT_ID
 };
 
//  Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);