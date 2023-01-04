var base_url = 'https://games.gamesclash.in/';
var server_url;
var find_timer;
var totalSeconds = 0;
var guserID;
var game_type = 2;
var avatar;
var avatar_ind = 1;
var player_name;
var prize;
var p1_id;
var opponent_id;
var opponent_name;
var opponent_avatar;
var opponent_avatar_ind = 2;
localforage.getItem('UserID').then(function(value){
    guserID = value;
    p1_id = value;
});
localforage.getItem('Username').then(function(value){
    player_name = value;
});

function usercheck() {
localforage.getItem('userlogindata').then(function (value) {
if (value !== true) {
        window.location.href = '/login'
        }
        else {
            check_playerdatas();
        }
    });
};
localforage.getItem('Avatar').then(function (value) {
    document.getElementById('Avatar').src = '/avatar/' + value;
});
//Player Data check
function check_playerdatas() {
    localforage.getItem('UserID').then(function(value){
    firebase.database().ref('User/'+value).child('Ticket').on('value', function(snapshot){
    if(snapshot.val()=='Yes'){
        Opponentfind();
        checkwaitingroom();   
    }
    else if(snapshot.val()=='Playing'){
        clearInterval(find_timer);
        Opponentredy();
        Game_server_redy();
    }
    else if(snapshot.val()=='GameOver'){
        Gameover();
        Gameover_lobby();
    } });
firebase.database().ref('User/'+value).child('Ticket').once("value").then(function(snapshot){
  if(snapshot.val()==0){
    location.replace("/");
  }  
})
    });
};


function Game_server_redy(){
/////Uesr data Lod On database
firebase.database().ref('User/'+guserID).once("value").then(function(snapshot){
    var Obj_playerdata = snapshot.val();
    prize = Obj_playerdata.TicketPrize;
    opponent_datalod(Obj_playerdata.Opponent);
    localforage.setItem('OpponentID', Obj_playerdata.Opponent);
});
};
//////////opponent Data lod
function opponent_datalod(opponentID){
    
    firebase.database().ref('User/'+opponentID).once("value").then( function(snapshot){
        var Obj_playerdata = snapshot.val();
        opponent_id = opponentID;
        opponent_name = Obj_playerdata.Username;
       server_url =  base_url + '#?' + game_type + '?_?' + prize + '?_?' 
+ p1_id + '?_?' + player_name + '?_?' + avatar_ind + '?_?'
+ opponent_id + '?_?' + opponent_name + '?_?' + opponent_avatar_ind + '?';
document.getElementById("Classicludo").src = server_url;
console.log(server_url);
    });
};

////////////////Waitng Room check
function  checkwaitingroom(){
localforage.getItem('EntryID').then(function(value){
    firebase.database().ref('Lobby/Short_room/'+value).once('value').then(function(snapshot){
        if(snapshot.numChildren()>0){
            var jsonobj = snapshot.val();
            const actionplayer = Object.keys(jsonobj)[0];
            room_data = jsonobj[actionplayer];
            if(room_data.playerID!==guserID){
            firebase.database().ref('User/'+room_data.playerID).update({
                Opponent: guserID,
                Ticket: 'Playing'
            });
            firebase.database().ref('User/'+guserID).update({
                Opponent: room_data.playerID,
                Ticket: 'Playing'
            });
            firebase.database().ref('Lobby/Short_room/'+value+'/'+room_data.roomID).remove();

 ///Remove player Waiting
 firebase.database().ref('Lobby/Short/'+EntryID).update({
    Waiting: 'nowaiting'
});           
///Game player Count
var lobby_parent = firebase.database().ref('Lobby/Short/'+value);
lobby_parent.once('value').then(snapshot=>{
    lobby_parent.update({
        Playnow: +snapshot.val().Playnow+2
    });
});
            }
        }
        else{
  make_new_room(value);
 };
 });
});
};

////Make new Room
function make_new_room(EntryID){
    var ms = Date.now();
localforage.getItem('UserID').then(function(playerids){
firebase.database().ref('User/'+playerids).once('value').then(snapshot=>{
if(snapshot.val().Ticket!=='Playing'){
    firebase.database().ref('Lobby/Short_room/'+EntryID+'/'+ms).update({
        playerID: playerids,
        roomID: ms
    });
firebase.database().ref('Lobby/Short/'+EntryID).update({
    Waiting: 1
});
firebase.database().ref('User/'+playerids).update({
MakeRoomID: ms
});
}
});
});
};
//Player find Time count///
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
window.onload = function () {
    find_timer = setInterval(timer_counts, 1000);
};

function timer_counts() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

    if (totalSeconds > 10) {
        document.getElementById('stopfindbtn').style.display = 'block';
    }
};

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
};


function Gameover_lobby(){
///Game player ----
localforage.getItem('EntryID').then(function(value){
var lobby_parent = firebase.database().ref('Lobby/Short/'+value);
lobby_parent.once('value').then(snapshot=>{
    var current_lobby =snapshot.val().Playnow-2;
    if(current_lobby<0){
        lobby_parent.update({
            Playnow: 0
        });
    }
    else{
    lobby_parent.update({
        Playnow: current_lobby
    });
}
});
});
};
