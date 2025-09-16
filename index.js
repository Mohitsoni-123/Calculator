let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
let btnElem=document.querySelectorAll("button");
let result=document.querySelector("#result");
let reset=document.querySelector("#restart");
btnElem.forEach(btn => {
    btn.addEventListener("click",()=>{
        console.log("you click on:",btn.id);
        // compChoice();
        let cmpChoice=compChoice()
        console.log("computer choice is:", cmpChoice)
        let finalResult=playRound(btn.id,cmpChoice);
        result.textContent=finalResult;
    })
});

function compChoice(){
    let choice=['rock','paper','scissor'];
    let randomComputerChoice=Math.floor(Math.random()*3);
    // console.log("computer choice is:",randomComputerChoice);
    return choice[randomComputerChoice];
}

function playRound(userSelection,compSelection){
    if(userSelection === compSelection){
        return "Match Draw..";
    }else if(
        (userSelection==='rock' && compSelection==='scissor') || 
        (userSelection==='paper' && compSelection==='rock') ||
        (userSelection==='scissor' && compSelection==='paper')
    ){
        userScore.textContent++;
        return ` You won ${userSelection} beats ${compSelection}`
        // console.log(userSelection, 'beats' ,compSelection);
    }else{
        compScore.textContent++;
        return ` You lose! ${compSelection} beats ${userSelection}`
        // console.log(compSelection, 'beats' ,userSelection);
    }
}

restart.addEventListener("click",()=>{
    userScore.textContent='0';
    compScore.textContent='0';
    result.textContent="Result..."
})