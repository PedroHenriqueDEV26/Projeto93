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

function login()
{
    var getName  = document.getElementById("inputName").value;
    firebase.database().ref("/users").child(getName).update({
        purpose: "Adicionar usuarios"
    })
    localStorage.setItem("user", getName)
    setTimeout(() => {
        window.location = "mintgram_room.html"
    }, 1000);
    
}

