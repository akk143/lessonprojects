const getaudioscreen = document.getElementById("audioscreen");
const prevbtn = document.getElementById("prev"),
      playbtn = document.getElementById("play"),
      nextbtn = document.getElementById("next"),
      stopbtn = document.getElementById("stop");
const getprogress = document.getElementById("progress"),
      getprogressbar = document.getElementById("progress-bar");
const getvolprogress = document.getElementById("volumeprogress");
const getdisplaytime = document.getElementById("displaytime");

const audios = ["sample1","sample2","sample3"];

let curridx = 0;

// loadaudios(audios[curridx]);

function loadaudios(audio){
    getaudioscreen.src = `./source/${audio}.mp3`;
}


function playaudio(){

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getaudioscreen.play();
}

function pauseaudio(){
    
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getaudioscreen.pause();
}

function playandpauseaudio(){

    if(getaudioscreen.paused){
        getaudioscreen.play();
    }else{
        getaudioscreen.pause();
    }
}

function nextaudio(){
    curridx+=1;

    if(curridx > audios.length-1){
        curridx = 0;
    }
    // console.log(curridx);
    loadaudios(audios[curridx]);
    playaudio();
}

function prevaudio(){
    curridx--;

    if(curridx < 0){
        curridx = audios.length-1;
    }
    // console.log(curridx);
    loadaudios(audios[curridx]);
    playaudio();
}


function updateprogress(e){
    const{currentTime,duration} = e.target;
    // console.log(currentTime,duration);

    if(getaudioscreen.currentTime === 0){
        getprogressbar.style.width = "0%";
    }else{
        const getprogresspercent = (currentTime/duration)*100;
        // console.log(getprogresspercent);
        getprogressbar.style.width = `${getprogresspercent}%`;
    }

    const mins = Math.floor((duration - currentTime)/60);
    const secs = Math.floor((duration - currentTime)%60);
    // console.log(mins,secs);

    const minvalue = mins.toString().padStart(2,"0");
    const secvalue = secs.toString().padStart(2,"0");

    getdisplaytime.innerText = `${minvalue}:${secvalue}`;
}


function progressclick(e){
    const getwidth = e.target.clientWidth;
    // console.log(getwidth);

    const clickx = e.offsetX;
    // console.log(clickx);

    const getduration = getaudioscreen.duration;
    // console.log(getduration);

    getaudioscreen.currentTime = (clickx/getwidth)*getduration;

}


function stopaudio(){
    getaudioscreen.currentTime = 0;
    getaudioscreen.style.width = "0%"

    pauseaudio();
}


function volumecontrol(){
    // console.log(getvolprogress.value);
    getaudioscreen.volume = getvolprogress.value/100;

}

getaudioscreen.addEventListener('timeupdate',updateprogress);
getaudioscreen.addEventListener('play',playaudio);
getaudioscreen.addEventListener('pause',pauseaudio);

playbtn.addEventListener('click',playandpauseaudio);
nextbtn.addEventListener('click',nextaudio);
prevbtn.addEventListener('click',prevaudio);
stopbtn.addEventListener('click',stopaudio);

getprogress.addEventListener('click',progressclick);
getvolprogress.addEventListener('change',volumecontrol);