
const firebaseConfig = {
    apiKey: "AIzaSyBEx_iJY6U7Z5v6vnWdARQhBLJdFS1a08Y",
    authDomain: "kwitter-e9df7.firebaseapp.com",
    databaseURL: "https://kwitter-e9df7-default-rtdb.firebaseio.com",
    projectId: "kwitter-e9df7",
    storageBucket: "kwitter-e9df7.appspot.com",
    messagingSenderId: "1080013258544",
    appId: "1:1080013258544:web:1ecf1203a498735a2312f5"
  };
  

  firebase.initializeApp(firebaseConfig);


function add_user(){
 var adduser=document.getElementById("input_box").value;
 firebase.database().ref("/").child(adduser).update({
    purpose:"user adding"
 }
 );
}