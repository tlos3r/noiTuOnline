import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyB6C-ahUgq0K7DMPsdT90Ll4qmtEXany4s",
   authDomain: "noituonline.firebaseapp.com",
   databaseURL: "https://noituonline-default-rtdb.firebaseio.com",
   projectId: "noituonline",
   storageBucket: "noituonline.appspot.com",
   messagingSenderId: "1007562219149",
   appId: "1:1007562219149:web:c125077e382c2594784cc4"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp