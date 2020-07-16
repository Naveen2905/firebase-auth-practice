var app_firebase = {};

$(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDmn6NRQ_8VYmkknoEBANYOpTqF94wmFGs",
        authDomain: "authentication-practice-671b8.firebaseapp.com",
        databaseURL: "https://authentication-practice-671b8.firebaseio.com",
        projectId: "authentication-practice-671b8",
        storageBucket: "authentication-practice-671b8.appspot.com",
        messagingSenderId: "127826382627",
        appId: "1:127826382627:web:c6b831529670bdc4960696",
        measurementId: "G-2ZW1BS8DZL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_firebase = firebase;
});