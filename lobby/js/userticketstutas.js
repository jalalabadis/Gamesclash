localforage.getItem('UserID').then(userId => {
    if (userId !== null) {
    firebase.database().ref('User/' + userId).once('value').then(snapshot => {
            var Ticket = snapshot.val().Ticket;
            if (Ticket == 'Yes'){
                callTicketCancel(userId);
            } 
        });
    }
});

function callTicketCancel(userId) {
    localforage.getItem('GameTypes').then(GameTypes => {
    localforage.getItem('EntryID').then(EntryID => {
    firebase.database().ref('User/' + userId).once('value').then(snapshot=>{
   var MakeRoomID = snapshot.val().MakeRoomID;
   firebase.database().ref('Lobby/'+GameTypes+'_room/'+EntryID+'/'+MakeRoomID).remove();
   firebase.database().ref('Lobby/'+GameTypes+'/'+EntryID).update({
    Waiting: 'nowaiting'
   },updateuserTricket);
    });
    });    
    });
};

function updateuserTricket(){
localforage.getItem('UserID').then(UserID=>{
var User_parent = firebase.database().ref('User/'+UserID);
User_parent.once('value').then(snapshot=>{
    var EntryFee = +snapshot.val().EntryFee;
User_parent.update({
    'DEPOSITCASH': +snapshot.val().DEPOSITCASH+EntryFee,
    'TicketPrize': 0,
    'Opponent': 0,
    'EntryFee': 0,
    'Ticket': 0,
    'MakeRoomID': 0
},Relodcash);
});

});
};

function Relodcash(){
localforage.getItem('UserID').then(UserID=>{
firebase.database().ref('User/'+UserID).once('value').then(snapshot=>{
    var DEPOSITCASH = +snapshot.val().DEPOSITCASH;
    var WINNINGSCASH = +snapshot.val().WINNINGSCASH;
    document.getElementById('wincash').innerHTML = +DEPOSITCASH+WINNINGSCASH;
    doalertReturnentrefee();
})
});
};

function doalertReturnentrefee() {
    $('.Alert-antrefeeReturn')['show'](), setTimeout(function() {
        $('.Alert-antrefeeReturn')['hide']();
    }, 0x7d0);
};