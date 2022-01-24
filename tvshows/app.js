const form=document.querySelector("#tvform");

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const ip=form.elements.query.value;
    const config={params:{q:ip}}
    const res= await axios.get(`https://api.tvmaze.com/search/shows`,config);
    addImages(res.data);
    ip='';
    
})

function addImages(shows){
    for(let res of shows){
    if(res.show.image){
    const imgsrc=res.show.image.medium;
    const img=document.createElement('IMG');
    img.src=imgsrc;
    document.body.append(img);
}
}
}