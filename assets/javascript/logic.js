$(document).ready(function () {
var config = {
    apiKey: "AIzaSyCeRJYMvSYbDZy008BL_UoNAWaa1J2gx-g",
    authDomain: "rps-chat-f4aac.firebaseapp.com",
    databaseURL: "https://rps-chat-f4aac.firebaseio.com",
    projectId: "rps-chat-f4aac",
    storageBucket: "rps-chat-f4aac.appspot.com",
    messagingSenderId: "960267570618"
  };

  firebase.initializeApp(config);
});


// new chat box

$(document).ready(function () {

    var name = "";

    firebase.database().ref('chat/').on('child_added',
    function(snapshot){
        var data = "<div id ='m'><p class ='name'>" +
        snapshot.child('name').val() + "</p><p class ='message'>" +
        snapshot.child('message').val() +"</p><div>";

        $("#messages").html($("#messages").html()+ data);
    });


    $("#name_submit").on("click", function () {
        name = $("#name").val();
        // alert(name)
        $("#name_prompt_parent").fadeOut();
        
    });

    $("#send_button").on('click', function(){
        var mess = $("#msg").val();
        // alert(mess);

        firebase.database().ref('chat/'+ Date.now()).set({
            name: name,
            message: mess


        });
    
    });

});





    // console.log('Page loaded---------');
    // var chatRef = firebase.database().ref("chat");
    // // Create an instance of Firechat
    // var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
    // $('#Login').on('click', function(){
    //              login();
    //           console.log('click works');
    //      })
    // // Listen for authentication state changes
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // If the user is logged in, set them as the Firechat user
    //     chat.setUser(user.uid, "Anonymous" + user.uid.substr(10, 8));
    //   } else {
    //     // If the user is not logged in, sign them in anonymously
    //     firebase.auth().signInAnonymously().catch(function(error) {
    //       console.log("Error signing user in anonymously:", error);
    //     });
    //   }
    // });
    // // 

    // function login() {
    //     // Log the user in via Twitter
    //     var provider = new firebase.auth.TwitterAuthProvider();
    //     firebase.auth().signInWithPopup(provider).catch(function(error) {
    //       console.log("Error authenticating user:", error);
    //     });
    //   }

    //   firebase.auth().onAuthStateChanged(function(user) {
    //     // Once authenticated, instantiate Firechat with the logged in user
    //     if (user) {
    //       initChat(user);
    //     }
    //   });

    //   function initChat(user) {
    //     // Get a Firebase Database ref
    //     var chatRef = firebase.database().ref("chat");

    //     // Create a Firechat instance
    //     var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

    //     // Set the Firechat user
    //     chat.setUser(user.uid, user.displayName);
    //   }

// })

