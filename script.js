let foarfeca = document.querySelector(".foarfeca")
let piatra = document.querySelector(".piatra")
let hartie = document.querySelector(".hartie")
let npc = document.querySelector(".npc")
let rezultat = document.querySelector(".resultat")

const imageArray = ["./img/Foarfeca.png", "./img/Hartie.png","./img/piatra.png"]
let npcPick;
let myPick;

const randomImage = () => {
    for(let i = 0; i < 10; i++){
       setTimeout(()=>{
        npc.src = imageArray[Math.floor(Math.random() * 3)];
        npcPick = npc.src;
       }, 500 * i) 
    }
    setTimeout(() => {
        if(npcPick.includes(myPick)){
            rezultat.innerHTML = "Remiza";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
        if(myPick == "Foarfeca" && npcPick.includes("Hartie")){
            rezultat.innerHTML = "Ai castigat";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
        if(myPick == "Hartie" && npcPick.includes("piatra")){
            rezultat.innerHTML = "Ai castigat";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
        if(myPick == "piatra" && npcPick.includes("Foarfeca")){
            rezultat.innerHTML = "Ai castigat";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
        if(myPick == "Hartie" && npcPick.includes("Foarfeca")){
            rezultat.innerHTML = "Ai pierdut";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
        if(myPick == "piatra" && npcPick.includes("Hartie")){
            rezultat.innerHTML = "Ai pierdut";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
        if(myPick == "Foarfeca" && npcPick.includes("piatra")){
            rezultat.innerHTML = "Ai pierdut";
            setTimeout(()=>{
                rezultat.innerHTML=" ";
            },1000)
        }
    }, 5000)
}

foarfeca.addEventListener("click",()=>{
foarfeca.style.borderColor = "red";
myPick = "Foarfeca";
randomImage();
setTimeout(()=>{
    foarfeca.style.borderColor = "black";
},1000)
})
piatra.addEventListener("click",()=>{
    piatra.style.borderColor = "red";
    randomImage();
    myPick = "piatra";
    setTimeout(()=>{
        piatra.style.borderColor = "black";
    },1000)
})
hartie.addEventListener("click",()=>{
    hartie.style.borderColor = "red";
    randomImage();
    myPick = "Hartie";
    setTimeout(()=>{
        hartie.style.borderColor = "black";
    },1000)
})
