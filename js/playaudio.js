function playaudioversusAudio(){
  document.getElementById("versusAudio").play();
};

function playcountTimerAudio(){
    document.getElementById("countTimerAudio").play();
};

function playscreenCollapseAudio(){
    document.getElementById("screenCollapseAudio").play();
};

function playdiceAudio(){
  localforage.getItem("Audioplaying").then((data)=>{
    if(data=="Unmute"){
  document.getElementById("diceAudio").play();
    }
  });
};

function playstepAudio(){
  localforage.getItem("Audioplaying").then((data)=>{
    if(data=="Unmute"){
  document.getElementById("stepAudio").play();
}
});
};

function playeatAudio(){
  localforage.getItem("Audioplaying").then((data)=>{
    if(data=="Unmute"){
  document.getElementById("eatAudio").play();
}
});
}; 

function playstartpAudio(){
  localforage.getItem("Audioplaying").then((data)=>{
    if(data=="Unmute"){
  document.getElementById("startpAudio").play();
}
});
}; 

function playtokenwinAudio(){
  localforage.getItem("Audioplaying").then((data)=>{
    if(data=="Unmute"){
  document.getElementById("tokenwinAudio").play();
}
});
};

function playvictoryAudio(){
  localforage.getItem("Audioplaying").then((data)=>{
    if(data=="Unmute"){
  document.getElementById("victoryAudio").play();
}
});
};