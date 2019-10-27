import { appendFile } from "fs";

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA7kLrWzteUaPbmuwvmUPyMIW4-xPuwyZ0",
    authDomain: "test-project-326f3.firebaseapp.com",
    databaseURL: "https://test-project-326f3.firebaseio.com",
    projectId: "test-project-326f3",
    storageBucket: "test-project-326f3.appspot.com",
    messagingSenderId: "629232788636",
    appId: "1:629232788636:web:b027a1b1308b87bfa5b959"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


$("#submit").on("click", function () {
    event.preventDefault();

    name = $("#name-input").val().trim()
    place = $("#place-input").val().trim()
    time = $("#time-input").val().trim()
    freq = $("#freq-input").val().trim()

    database.ref().push({

        name: name,
        place: place,
        time: time,
        freq: freq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    })

})

database.ref().on("child_added", function (Snapshot) {

    console.log(snapshot.val().name);
    console.log(snapshot.val().place);
    console.log(snapshot.val().freq);

    html(time).snapshot.val()
})
minAway = moment("#time-input", "HH:mm")

var newRow = $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(place),
    $("<td>").text(freq),
    $("<td>").text(nextArvl),
    $("<td>").text(minAway),

)