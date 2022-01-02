import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCDvLrPqxsNymIM-vgkBymwmtRX09z5qjA",
    authDomain: "birthday-ac5a8.firebaseapp.com",
    projectId: "birthday-ac5a8",
    storageBucket: "birthday-ac5a8.appspot.com",
    messagingSenderId: "287309602891",
    appId: "1:287309602891:web:95f13f4c754172ab4d2dce"
  };
  

  const app = initializeApp(firebaseConfig);
  export const authentication = getAuth(app);
