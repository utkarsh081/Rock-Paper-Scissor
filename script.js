let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");

const gencompchoice = () =>{
    let options = ["rock","scissor","paper"];
    p = Math.floor(Math.random() * 3);
    return options[p];
};
const showWinner =(userWin) =>{
    if(userWin){
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorep.innerText = compscore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}
const playgame =(userchoice)=>{
    const compchoice = gencompchoice();
    if(userchoice === compchoice){
        msg.innerText = "Match Is Draw"
        msg.style.backgroundColor = "black";
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            if(compchoice === "paper"){
                userwin = false;
            }
            else{
                userwin = true;
            }
        }
        else if(userchoice === "paper"){
            if(compchoice === "rock"){
                userwin = true;
            }
            else{
                userwin = false;
            }
        }
        else if(userchoice === "scissor"){
            if(compchoice === "paper"){
                userwin = true;
            }
            else{
                userwin = false;
            }
        }
        showWinner(userwin);
    }
};
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
