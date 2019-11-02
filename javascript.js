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



$("#submit").on("click", function (event) {
  event.preventDefault();

  var name = $("#name-input").val().trim();
  var place = $("#place-input").val().trim();
  var time = moment($("#time-input").val().trim(), "HH:mm").format("hh:mma");
  var freq = moment($("#freq-input").val().trim(), "mm").format("mm");


  var newTrain={
  name: name,
  place: place,
  time: time,
  freq: freq,
  };

  database.ref().push(newTrain);

 

  console.log(name);
  console.log(place);
  console.log(time);
  console.log(freq);

  alert("New Train Added!");

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

  var now = moment();

  var trainTime = moment(time).get('hour' , 'minute');
  console.log(trainTime);

  var nextArvl = moment(trainTime).set('hour', 'minute').add(freq, 'minutes');
  console.log(nextArvl);

  var minAway =moment.duration(now.to(nextArvl)).asMinutes();

   

  var newRow = $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(place),
    $("<td>").text(freq),
    $("<td>").text(nextArvl),
    $("<td>").text(minAway)
  );

  $("#train-sched > tbody").append(newRow);


});