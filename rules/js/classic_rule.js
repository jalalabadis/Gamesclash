function usercheck(){
    localforage.getItem("userlogindata").then((data)=>{
    if(data==true){
    }
    else{
     window.location.href = "/login";
    };
    })};
   localforage.getItem("Avatar").then((data)=>{
                document.getElementById("Avatar").src = "/avatar/"+data;
                });
  localforage.getItem("Wincash").then((data)=>{
  var Wincash = data;
    addDiposit(Wincash);
    });
 function addDiposit(Wincash){
localforage.getItem("DepositCash").then((data)=>{
    document.getElementById("wincash").innerHTML = +Wincash+data;
 })};

 /////Sidebar open
var sidebar = document.getElementById("sidenev");
var sideover = document.getElementById("sidenevover");
function opensidenev(){
sidebar.classList.add("sideNav-open");
sideover.classList.add("sideNav-overlay");
};

/////Sidebar Hide

window.onclick = function(event) {
   if (event.target == sideover) {
       sidebar.classList.remove("sideNav-open");
       sideover.classList.remove("sideNav-overlay");
   }
 };

 function addcash(){
    window.location.href = "/add-funds";
};