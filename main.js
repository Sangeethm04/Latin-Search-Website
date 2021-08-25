  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAyo3FHdkg7l60eS0Gsq6KH02BbtNtDPJU",
    authDomain: "latin-dictionary-1fd92.firebaseapp.com",
    databaseURL: "https://latin-dictionary-1fd92-default-rtdb.firebaseio.com",
    projectId: "latin-dictionary-1fd92",
    storageBucket: "latin-dictionary-1fd92.appspot.com",
    messagingSenderId: "598009407755",
    appId: "1:598009407755:web:589c3769455eca68d99a0e"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var location = getInputVal('location');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, location, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },15000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, location, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    location:location,
    email:email,
    phone:phone,
    message:message,
  })
}

