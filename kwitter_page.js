var firebaseConfig = {
    apiKey: "AIzaSyCDKK7F5zkeRz5AsrcnGzCJ87JrLr_bTXg",
    authDomain: "kwitter-test-95ecf.firebaseapp.com",
    databaseURL: "https://kwitter-test-95ecf-default-rtdb.firebaseio.com/",
    projectId: "kwitter-test-95ecf",
    storageBucket: "kwitter-test-95ecf.appspot.com",
    messagingSenderId: "950792171625",
    appId: "1:950792171625:web:7fe1d155beaf117873f2f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room-name");
function Send(){
    msg = document.getElementById("msd").value;
    firebase.database().ref("/").child(room_name).push({
          name: username,
          message: msg,
          like:0
    });
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room-name");
    window.location.replace("index.html");
}
  