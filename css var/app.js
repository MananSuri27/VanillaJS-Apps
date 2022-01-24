const form=document.querySelectorAll(".controls input");

function handleUpdate(){
    const suffix=this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

form.forEach(input => input.addEventListener('change',handleUpdate));
form.forEach(input => input.addEventListener('mousemove',handleUpdate));




