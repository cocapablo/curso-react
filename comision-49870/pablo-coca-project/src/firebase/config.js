import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn0LDmEZT9kJ9XvL8BlHZHo1gzH-hLmSg",
  authDomain: "pablo-coca-project.firebaseapp.com",
  projectId: "pablo-coca-project",
  storageBucket: "pablo-coca-project.appspot.com",
  messagingSenderId: "437179341736",
  appId: "1:437179341736:web:edafd6038ce4a566209b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect = () => app;