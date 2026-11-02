// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

// Configuration Firebase : valeurs fournies par toi
const firebaseConfig = {
  apiKey: "AIzaSyC7x2d7kXK8hT0h7GvTBHZDZ30R-vqiSEY",
  authDomain: "love-bebe.firebaseapp.com",
  databaseURL: "https://love-bebe-default-rtdb.firebaseio.com",
  projectId: "love-bebe",
  storageBucket: "love-bebe.firebasestorage.app",
  messagingSenderId: "403955591576",
  appId: "1:403955591576:web:ddc6771efa644e9ce4e3ed",
  measurementId: "G-Y3F6LPXNC2"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Services Firebase
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Analytics : initialisation compatible avec les navigateurs pris en charge
let analytics = null;

const analyticsReady = isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
    return analytics;
  })
  .catch((error) => {
    console.warn("Firebase Analytics indisponible :", error);
    return null;
  });

// Exportation pour les autres fichiers
export {
  app,
  auth,
  db,
  storage,
  analytics,
  analyticsReady
};