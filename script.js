let userScore = 0;
let compScore = 0;

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

// const choices =document.querySelector(".choice");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () =>{
    const options = ["rock","paper","scir"];
    const rdmidx = Math.floor(Math.random()*3);
    return options[rdmidx];
}

const drawfun = () =>{
    console.log("Match Drawn");
    msg.innerText = ("Game was Draw Play Again");
    msg.style.backgroundColor = "Aqua";
    msg.style.color = "black";
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";

    }else{
        compScore++
        compscorepara.innerText = compScore;
        msg.innerText = (`You Lose ${compchoice} beats your ${userchoice}`);
        msg.style.backgroundColor = "Red";
        msg.style.color = "white";
    }
}

const playgame = (userchoice) =>{
    console.log("user-choice =",userchoice)
    //Generate computer choice.
    const compchoice = gencompchoice();
    console.log("computer choice =",compchoice);

    if(userchoice === compchoice){
        drawfun();
    }else{
        let userwin = true;
        if(userchoice = "rock"){
            userwin = compchoice ==="paper" ? false : true;
        }

        else if(userchoice === "paper"){
            userwin = compchoice ==="scir" ? false : true; 
        }else{
            userwin = compchoice ==="rock" ? false : true;
        }

        showwinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked" , userchoice);
        playgame(userchoice);
    });
});