const secHand=document.querySelector(".sec");
const minHand=document.querySelector(".min");
const hrHand=document.querySelector(".hr");

const time=document.querySelector(".time");


function setTime(){
    const now=new Date();

    const sec=now.getSeconds();
    if(sec==0){
        secHand.style.transition=`none`;
        secHand.style.transform=`rotate(90deg)`;
    }
    if(sec==1){
        secHand.style.transition=`all 0.05s`;
        secHand.style.transform=`rotate(91deg)`;
    }
    else secHand.style.transform=`rotate(${(sec/60)*360 +90}deg)`;

    
    

    const min=now.getMinutes();
    if(min==0){
        minHand.style.transition=`none`;
        minHand.style.transform=`rotate(90deg)`;
    }
    if(min==1){
        minHand.style.transition=`all 0.05s`;
        minHand.style.transform=`rotate(91deg)`;
    }
    else minHand.style.transform=`rotate(${((min / 60) * 360) + ((sec/60)*6) + 90}deg)`;

    const hr=now.getHours();
    if(hr==0){
        hrHand.style.transition=`none`;
        hrHand.style.transform=`rotate(90deg)`;
    }
    if(hr==1){
        hrHand.style.transition=`all 0.05s`;
        hrHand.style.transform=`rotate(91deg)`;
    }
    else hrHand.style.transform=`rotate(${((hr / 12) * 360) + ((min/60)*30) + 90}deg)`;
    const t=`${hr%12}:${min} PM`;

    if(hr<12){
     t=`${hr}:${min} AM`;
    }else if(hr==12){
     t=`${12}:${min} PM`;}

    time.innerText=t;

}

setInterval(setTime, 1000);

setTime();