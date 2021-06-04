var firebaseConfig = {
    apiKey: "AIzaSyDjGHSwDTAi1PGtU6pSC941--hRCZSdPf8",
    authDomain: "kwitter-app-96439.firebaseapp.com",
    databaseURL: "https://kwitter-app-96439-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-96439",
    storageBucket: "kwitter-app-96439.appspot.com",
    messagingSenderId: "1001898403013",
    appId: "1:1001898403013:web:b195167857227cbd3a7cac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}
function addroom(){
    roomname=document.getElementById("roomname").value
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding room name"
    });
    localStorage.setItem("roomname",roomname)
    window.location="kwitter_page.html"
}