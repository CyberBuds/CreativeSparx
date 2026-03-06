import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    projectId: "cybermail-a91ec",
    appId: "1:277440958795:web:ca9069b2be2046052818ce",
    storageBucket: "cybermail-a91ec.appspot.com",
    apiKey: "AIzaSyCksjxiRM04JBoXqFN7tpk_1yFrd87vd1g",
    authDomain: "cybermail-a91ec.firebaseapp.com",
    messagingSenderId: "277440958795",
    measurementId: "G-9K3C1L19D7"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
