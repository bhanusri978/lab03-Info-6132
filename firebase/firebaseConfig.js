import { initializeApp } from 'firebase/app';



  const firebaseConfig = {
    apiKey: "AIzaSyB5LY6Tvcsf5hkmdPAcGbprJsdbX5aw344",
    authDomain: "booklibrary-79814.firebaseapp.com",
    databaseURL: "https://booklibrary-79814-default-rtdb.firebaseio.com",
    projectId: "booklibrary-79814",
    storageBucket: "booklibrary-79814.firebasestorage.app",
    messagingSenderId: "778775946403",
    appId: "1:778775946403:web:f8d3c416fd82136cc8cb16"
  };



const app = initializeApp(firebaseConfig);

export default app;
