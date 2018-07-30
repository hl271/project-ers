var firebase = require('firebase')

const config = {
    apiKey: "AIzaSyBfwDG3Cl_JuXuXHJitSxIZ4cShKdT8G-0",
    authDomain: "project-ers.firebaseapp.com",
    databaseURL: "https://project-ers.firebaseio.com/",
    storageBucket: "project-ers.appspot.com"
}

firebase.initializeApp(config)
firebase.database().ref('projects_basic').orderByKey()
                .equalTo('trash-again')
                .on('child_added', function (snapshot) {console.log(snapshot.val())})