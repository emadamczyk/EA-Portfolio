// Initialize Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBFpiT3jEPjr5JxKKih-nR5-rKO5FGFh3Q",
    authDomain: "ea-portfolio.firebaseapp.com",
    databaseURL: "https://ea-portfolio.firebaseio.com",
    projectId: "ea-portfolio",
    storageBucket: "ea-portfolio.appspot.com",
    messagingSenderId: "892214456176"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
  console.log("you clicked submit");
  event.preventDefault();
  var name = $("#name")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();
  var message = $("#message")
    .val()
    .trim();
  var newContact = {
    name: name,
    email: email,
    message: message
  };
  console.log(newContact);

  database.ref().push(newContact);
  console.log(newContact.name);
  console.log(newContact.email);
  console.log(newContact.message);

  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
});
