// ===============================
// CONFIGURAÇÕES
// ===============================

const YOUTUBE_VIDEO_ID = "COLE_AQUI_O_ID_DO_VIDEO";

let player;

const intro = document.getElementById("intro");
const convite = document.getElementById("convite");
const videoContainer = document.getElementById("videoContainer");

const envelope = document.getElementById("seal");

const seal = document.getElementById("waxSeal");

const ribbonLeft = document.querySelector(".left");
const ribbonRight = document.querySelector(".right");

const paper = document.getElementById("paper");

// ===============================
// CLIQUE NO ENVELOPE
// ===============================

envelope.onclick = function(){

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

videoContainer.style.display="flex";

createPlayer();

},800);

}

// ===============================
// PLAYER YOUTUBE
// ===============================

function createPlayer(){

player = new YT.Player("player",{

width:"100%",

height:"100%",

videoId:YOUTUBE_VIDEO_ID,

playerVars:{

autoplay:1,

controls:1,

rel:0,

playsinline:1

},

events:{

onStateChange:onPlayerStateChange

}

});

}

function onYouTubeIframeAPIReady(){}

// ===============================
// QUANDO O VÍDEO TERMINAR
// ===============================

function onPlayerStateChange(event){

if(event.data===YT.PlayerState.ENDED){

videoContainer.style.display="none";

convite.style.display="flex";

abrirPergaminho();

}

}

// ===============================
// ANIMAÇÃO
// ===============================

function abrirPergaminho(){

seal.classList.add("breakSeal");

ribbonLeft.classList.add("ribbonLeft");

ribbonRight.classList.add("ribbonRight");

setTimeout(()=>{

paper.classList.add("paperOpen");

},600);

}

// ===============================
// CALENDÁRIO
// ===============================

document
.getElementById("calendar")
.addEventListener("click",()=>{

const inicio="20260809T160000";

const fim="20260809T200000";

const texto=`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:1º Ano de Reinado da Princesa Maria Helena
DTSTART:${inicio}
DTEND:${fim}
LOCATION:Espaço Karibi Festas
DESCRIPTION:Convocação Real
END:VEVENT
END:VCALENDAR`;

const blob=new Blob([texto],{type:"text/calendar"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Convocacao-Real.ics";

link.click();

});

link.click();

});
