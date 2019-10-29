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

  var database = firebase.database();

  var name = "";
  var place = "";
  var time = "";
  var freq = 0;

  
  
  $("#submit").on("click", function () {
      event.preventDefault();
      
      name = $("#name-input").val().trim();
      place = $("#place-input").val().trim();
      time = $("#time-input").val().trim();
      freq = $("#freq-input").val().trim();

      + freq
      
      minAway = moment([]).toNow(mm);


      database.ref().push({

        name: name,
        place: place,
        time: time,
        freq: freq,
        
      })

  })

  database.ref().on("child_added", function(childSnapshot) {

    
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().place);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().freq);

    $("#")

    })
     database.ref().orderByChild().limitToLast(1).on("child_added", function(snapshot){})
     var newRow = $("<tr>").append(
      $("<td>").text(childSnapshot.val().name);
      $("<td>").text(childSnapshot.val().place);
      $("<td>").text(childSnapshot.val().freq);
      $("<td>").text(childSnapshot.val().nextArvl);
      $("<td>").text(childSnapshot.val().minAway);
      )
      
      minAway = moment("#time-input", "HH:mm")
      