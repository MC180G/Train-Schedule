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


$("#submit").on("click", function (event) {
  event.preventDefault();

  var name = $("#name-input").val().trim();
  var place = $("#place-input").val().trim();
  var time = $("#time-input").val().trim();
  var freq = $("#freq-input").val().trim();


  database.ref().push({
    name: name,
    place: place,
    time: time,
    freq: freq,
    });

 
  console.log(name);
  console.log(place);
  console.log(time);
  console.log(freq);

  $("name-input").val("");
  $("place-input").val("");
  $("time-input").val("");
  $("freq-input").val("");

});


database.ref().on("child_added", function (childSnapshot) {

  var name = childSnapshot.val().name;
  var place = childSnapshot.val().place;
  var time = childSnapshot.val().time;
  var freq = childSnapshot.val().freq;

  var convTime = moment(time, "HH:mm").subtract(1, 'year');
  console.log(convTime);

  var trainTime = moment().diff((convTime), "minutes");
  console.log(trainTime);

  var timeRemain = trainTime % freq;
  
  var minAway = freq - timeRemain;
  
  var nextArvl = moment().add(minAway, 'minutes');
  console.log(nextArvl);

   

  var newRow = $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(place),
    $("<td>").text(freq),
    $("<td>").text(nextArvl.format("hh:mm")),
    $("<td>").text(minAway)
  );

  $("#train-sched > tbody").append(newRow);


});