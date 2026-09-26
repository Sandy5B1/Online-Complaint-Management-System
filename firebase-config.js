import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBzINUMmXAIgEZcBVD9NUDWRBXHSzP3qhc",
    authDomain: "complaint-management--system.firebaseapp.com",
    projectId: "complaint-management--system",
    storageBucket: "complaint-management--system.firebasestorage.app",
    messagingSenderId: "415096501291",
    appId: "1:415096501291:web:a1a1f42eff0dfaa338266e",
    measurementId: "G-FD7KD2CYE2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);