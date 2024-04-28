const getcontainer = document.querySelector('.container');
const getvideoscreen = document.getElementById("videoscreen"),
      prevbtn = document.getElementById('prev'),
      playbtn = document.getElementById('play'),
      nextbtn = document.getElementById('next'),
      stopbtn = document.getElementById('stop');
const getvolprogress = document.getElementById('volprogress');
const getprogress = document.querySelector('.progress'),
      getprogressbar = document.querySelector('.progressbar');
const getopenfullscreen = document.getElementById('openfullscreen'),
      getclosefullscreen = document.getElementById('closefullscreen');
const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');


const videos =['samplevideo1','samplevideo2'];

let curridx = 0;
loadvideo(videos[curridx]);

function loadvideo(video){
    getvideoscreen.src = `./source/${video}.mp4`;
    gettitle.textContent = video;
}


function playvideo(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getvideoscreen.play();
}


function pausevideo(){
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getvideoscreen.pause();
}


function playandpausevieo(){
    if(getvideoscreen.paused){
        playvideo();
    }else{
        pausevideo();
    }
}


function nextvideo(){
    curridx+=1;

    if(curridx > videos.length-1){
        curridx = 0;
    }
    loadvideo(videos[curridx]);
    playvideo();
}


function prevvideo(){
    curridx--;

    if(curridx < 0 ){
        curridx = videos.length-1;
    }
    loadvideo(videos[curridx]);
    playvideo();
}


function stopvideo(){
    getvideoscreen.currentTime === 0;
    pausevideo();
}

function volumecontrol(){
    getvideoscreen.volume = getvolprogress.value/ 100;
}


function updateprogress(e){
    const{duration,currentTime} = e.target;
    // console.log(duration,currentTime);

    if(getvideoscreen.currentTime === 0){
        getprogressbar.style.width = `0%`;
    }else{
        const progresspercent = (currentTime/duration)*100;
        getprogressbar.style.width = `${progresspercent}%`;
    }

    let mins = Math.floor(getvideoscreen.currentTime/60);
    let secs = Math.floor(getvideoscreen.currentTime%60);
    // console.log(mins,secs);

    const minvalue = mins.toString().padStart(2,'0');
    const secvalue = secs.toString().padStart(2,'0');
    // console.log(minvalue,secvalue);

    getdisplaytime.innerText = `${minvalue}:${secvalue}`;
}


function clickporgress(e){
    const getclientwidth = e.target.clientWidth;
    const clickx = e.offsetX;
    const getduration = getvideoscreen.duration;

    getvideoscreen.currentTime = (clickx/getclientwidth)*getduration;
}



function openfullscreen(){
    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen();
    }else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen();
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen();
    }else{
        getcontainer.msRequestFullscreen();
    }

    getopenfullscreen.style.display = 'none';
    getclosefullscreen.style.display = 'inline-block';
}


function closefullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.mozCancelFullscreen){
        document.mozCancelFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else{
        document.msExitFullscreen();
    }

    getopenfullscreen.style.display = 'inline-block';
    getclosefullscreen.style.display = 'none';
}


getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvideo);

playbtn.addEventListener('click',playandpausevieo);
nextbtn.addEventListener('click',nextvideo);
prevbtn.addEventListener('click',prevvideo);
stopbtn.addEventListener('click',stopvideo);

getvolprogress.addEventListener('change',volumecontrol);
getprogress.addEventListener('click',clickporgress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);