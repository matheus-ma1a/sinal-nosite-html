function firebaseConect() {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAsgIan7t-_jJekU8XMZaDWHQ_syWNyCp0",
        authDomain: "sinais-com-site.firebaseapp.com",
        projectId: "sinais-com-site",
        storageBucket: "sinais-com-site.appspot.com",
        messagingSenderId: "40033951119",
        appId: "1:40033951119:web:72574ef5fdd7f37e773ffa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
}


firebaseConect()