function add_user(){
    var username=document.getElementById("input_box").value;
    localStorage.setItem("username1",username);
    window.location="kwitter_room.html";
}