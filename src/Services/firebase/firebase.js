import { initializeApp,getApp ,getApps} from "firebase/app";
import {getAuth} from "firebase/auth";


const  firebaseConfig = {
    apiKey:process.env.EXPO_PUBLIC_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,

};


let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized",app);
} else {
    app = getApp(); // ✅ Use existing app if already initialized
    console.log("Firebase app already initialized");
}
const auth = getAuth(app);

export {auth}


//doc url - https://firebase.google.com/docs/web/learn-more#web_2