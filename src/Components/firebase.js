import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFEG6EVAeEi_2_wVDSYFgh6Mi3GRuHbg4",
  authDomain: "otp-generate-app-9407c.firebaseapp.com",
  projectId: "otp-generate-app-9407c",
  storageBucket: "otp-generate-app-9407c.appspot.com",
  messagingSenderId: "574761514414",
  appId: "1:574761514414:web:a9ab8d96d8ed2916ff043f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
