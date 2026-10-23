const keyframes={
    translate:['-100vw 0',0]
};
const options={
    duration: 1000,
    easing: 'ease',
}

COLOR=["red", "blue", "yellow", "green", "black"]

let i=0;

while (i<5){
    const r=Math.floor(Math.random()*5)
    const box=document.createElement("div");
    box.style.cssText = `
        height: 100px;
        width: 100px;
        margin: 0 auto;
        background-color: ${COLOR[r]};
        color:white; 
    `;
    box.textContent=i+1;

    document.body.append(box);
    box.animate(keyframes,options);

    i++;
}