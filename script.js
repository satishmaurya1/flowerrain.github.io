function createheart(){
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.innerText='🌼 🌸 🌷';
    document.body.appendChild(heart);
    heart.style.left= Math.random()*100+'vw';
    heart.style.animationDuration=Math.random()*2+5+'s';
    setTimeout(() => {
        heart.remove();
    }, 5000);

}

setInterval(createheart,300);
