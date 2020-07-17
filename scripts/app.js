$(function () {

    // Your web app's Firebase configuration
    var config = {
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
    firebase.initializeApp(config);
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    // const status = document.getElementById('loginStatus')

    // Sign In  
    if (btnLogin) {
        btnLogin.addEventListener('click', e => {
            //Get Email and pass
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message))
        })
    }

    // Sign Up 
    if (btnSignUp) {
        btnSignUp.addEventListener('click', e => {
            //Get Email and pass
            //ToDo : Check for real Email
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, pass);

            promise.catch(e => console.log(e.message))
        });

    }
    // Sign Out 
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        // window.location = 'index.html';
        // console.log('Clicked');
    })

    //Add realtime Authentication

    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            console.log('Logged In');
            btnLogout.classList.remove('hide');
            $("#loginStatus").text("Logged In").addClass('login');
            // window.location.href = 'welcomePage.html';
        } else {
            console.log(`Logged Out`);
            btnLogout.classList.add('hide')
            // window.location = 'index.html';
            $("#loginStatus").text("Logged Out").addClass('logout');
        }
    })

});