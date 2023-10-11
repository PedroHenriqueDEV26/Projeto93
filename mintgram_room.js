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

var nameU;
var nameR;

function addRoom(){
    nameR = document.getElementById("roomName").value;
    firebase.database().ref("/rooms").child(nameR).update({
        purpuse: "Adicionar sala"
    })

    localStorage.setItem("storeNames", nameR)

}

function getData() {
    firebase.database().ref("/rooms").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            console.log("Nome da Sala - " + roomNames);
            row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
} 
getData()

function logout()
{
localStorage.removeItem("storeNames");
localStorage.removeItem("")
window.location = "index.html"
}

function redirectToRoomName(name)
{
    window.location = "mintgram_msg.html"
}