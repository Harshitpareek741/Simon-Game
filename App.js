let usersq = [];
let systmsq = [];
let start = false;

let h2 = document.querySelector("h2");
let levelcount = 0  ;
let box = [".red",".green",".blue",".pink"];
let level = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        console.log("Game Started");
        setTimeout(() => {
             levelup();
        }, 400);
    }
});

function levelup(){
    usersq = [];
    let random =  Math.floor(Math.random()*4);
    let btn = document.querySelector(`${box[random]}`);
    let btnid = btn.getAttribute("id");
    systmsq.push(btnid);
    console.log(systmsq);
    flash(btn);
}

function checkans(idx){
    if(systmsq[idx] === usersq[idx]){
        console.log("matched");
      if(systmsq.length === usersq.length){
         setTimeout(() => {
             levelup();
         }, 1000);
      }
    }
    else{
        gameoverr();
    }
};
function flash(btn){
  levelcount++;
  h2.innerText = `Level-${levelcount}`;
  
  btn.classList.add("flash");
  setTimeout(() => {
     btn.classList.remove("flash");
  }, 500);
}

let allbtn = document.querySelectorAll('button');

for(let albtn of allbtn){
    albtn.addEventListener("click",ussertoch);
}

function ussertoch(){

    this.classList.add("usertouch");

    usersq.push()
    setTimeout(() => {
        this.classList.remove("usertouch");
    }, 250);

    let newthing = this;
    let usersqcolor = newthing.getAttribute("id");
    usersq.push(usersqcolor);
    console.log(usersq);
    
    checkans(usersq.length -1);
    btnvoice(usersqcolor);
}

function gameoverr(){
  gameover();
    start = false;
    usersq = [];
    systmsq = [];
    h2.innerText = `Game Over Your Score is ${levelcount} Press Any Key to start`;
    gameoveraudi();
    levelcount = 0;
}

function gameover() {
    // Apply the game over animation
    const gameOverBackground = document.createElement("div");
    gameOverBackground.classList.add("game-over-background");
    document.body.appendChild(gameOverBackground);

    // Show a game over message (you can customize this part)
  

    // Reset the game
    levelcount = 0;
    h2.innerText = "Level-0";
    usersq = [];
    systmsq = [];

    // Remove the game over animation element after a delay (optional)
    setTimeout(() => {
        document.body.removeChild(gameOverBackground);
    }, 2000); // Adjust the delay to match your animation duration
}

function gameoveraudi(){
    let audio = document.getElementById("myAudio");
    audio.play();
}
function btnvoice(btnidhe){
    let btnvoice = document.getElementById(`${btnidhe}a`);
   console.log(btnvoice);
    btnvoice.play();
}