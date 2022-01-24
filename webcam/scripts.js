const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then(localMediStream=>{
        console.log(localMediStream)

        video.srcObject = localMediStream;
        video.play();
    })
    .catch(err=>{
        console.log(err)
    })
}


function paintToCanvas(){
    const width=video.videoWidth;
    const height=video.videoHeight;
    canvas.height=height;
    canvas.width=width;

    return setInterval(()=>{
     ctx.drawImage(video,0,0,width,height);
     let pixels=ctx.getImageData(0,0,width,height);
     ctx.globalAlpha=0.7
     pixels=redEffect(pixels)
     ctx.putImageData(pixels,0,0,);
    }, 16)
}


function takePhoto(){
    snap.currentTime=0;
    snap.play()

    const data=canvas.toDataURL('image/jpeg')
    console.log(data)
    const link=document.createElement('a')
    link.href=data;
    link.setAttribute('download','snap')
    link.innerHTML=`<img src=${data} alt="picture"/>`
    strip.insertBefore(link,strip.firstChild)
}
getVideo()

video.addEventListener('canplay',paintToCanvas)

function redEffect(pixels){

    for(let i=0;i<pixels.data.length;i=i+4){
          pixels.data[i-62]=pixels.data[i]+59;
          pixels.data[i+190]=pixels.data[i+1]*0.7;
          pixels.data[i-29]=pixels.data[i+2]*1.9;
    }

    return pixels;
}

//pixels.data[i-62]=pixels.data[i]+59;
//pixels.data[i+190]=pixels.data[i+1]*0.7;
//pixels.data[i-29]=pixels.data[i+2]*1.9;
