// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PmWnCea0sYXAB9RRZ0KVkh-TxryKowA",
  authDomain: "pinjolbeast.github.io",
  databaseURL: "https://tenzoska-moments-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tenzoska-moments",
  storageBucket: "tenzoska-moments.firebasestorage.app",
  messagingSenderId: "837325675790",
  appId: "1:837325675790:web:15029054db81eeb05bcb5f",
  measurementId: "G-G6VVZXF9HJ"
};

// Check if Firebase is available (not blocked by antivirus)
if (typeof firebase !== 'undefined') {
  try {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initialize services
    window.db = firebase.database();
    window.auth = firebase.auth();
    window.firebaseAvailable = true;
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Firebase initialization failed:', error);
    window.firebaseAvailable = false;
  }
} else {
  console.error('Firebase is not loaded. This may be due to antivirus software blocking external scripts.');
  window.firebaseAvailable = false;
  alert('Firebase is not available. Please disable your antivirus temporarily or whitelist this site to enable authentication features.');
}
