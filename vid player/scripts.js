const player=document.querySelector('.player')
const video=player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fscreen= player.querySelector('.fullscreen');
const labelofspeed=player.querySelector('.speed')


function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent=icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRange(){
video[this.name]=this.value;
if(this.name==="playbackRate"){
    console.log(labelofspeed)
    labelofspeed.innerHTML=`${this.value}x`
}
}

function handleProgress(){
    const percentage= (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percentage}%`
}

function scrub(e){
    video.currentTime=(e.offsetX/progress.offsetWidth)*video.duration;
}

function fullscreenToggle(){
    player.requestFullscreen();
}


video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate',handleProgress)


toggle.addEventListener('click',togglePlay)

skipButtons.forEach(button => button.addEventListener('click',skip))
ranges.forEach(range=>range.addEventListener('change',handleRange))
ranges.forEach(range=>range.addEventListener('mousemove',handleRange))

progress.addEventListener('click',scrub);
let mouseDown=false;
progress.addEventListener('mousedown', ()=> mouseDown=true)
progress.addEventListener('mousemove',(e) => mouseDown && scrub(e));
progress.addEventListener('mouseup', ()=> mouseDown=false)
fscreen.addEventListener('click',fullscreenToggle)

