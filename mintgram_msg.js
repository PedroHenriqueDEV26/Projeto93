//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCAPFK9zxJtoBH6OZdgQN9-2Ra-9v37JTs",
    authDomain: "mintgram-38829.firebaseapp.com",
    databaseURL: "https://mintgram-38829-default-rtdb.firebaseio.com",
    projectId: "mintgram-38829",
    storageBucket: "mintgram-38829.appspot.com",
    messagingSenderId: "334336552117",
    appId: "1:334336552117:web:e197a22988c7b3216862fc"
};

firebase.initializeApp(firebaseConfig)
roomName = localStorage.getItem('storeNames')
userName = localStorage.getItem('user')

function send(){
    msg = document.getElementById('msg').value;
    firebase.database().ref("/rooms" + roomName).push({
        name: userName, 
        message: msg,
        like: 0
    })
}


function getData() {
    firebase.database().ref("/rooms" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                //Início do código
                name = messageData['name'];
                message = messageData['message'];
                like = messageData['like']
                nameWithTag = "<h4> "+name+"<img class = 'user_tick' src = 'images/tick.png'></h4>"
                messagewithTag = "<h4 class = 'message_h4'>" + message + "</h4>"
                like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
                spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                row = nameWithTag + messagewithTag + like_button + spanWithTag
                document.getElementById("output").innerHTML += row;
                //Fim do código
            }
        });
    });
}
getData();

function updateLike(messageId)
{
   
 btnId = messageId;
 likes = document.getElementById(btnId).value;
 updateLikes = Number(likes) + 1;
 //alert(updateLikes)
 firebase.database().ref("/"+roomName).child(messageId).update({
    like: updateLikes
 })
}

function logout() {
    localStorage.removeItem("storeNames");
    localStorage.removeItem("user")
    window.location = "index.html"
}

