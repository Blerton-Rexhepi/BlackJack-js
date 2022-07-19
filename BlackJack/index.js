
let cards=[]//Arrey i kartave 
let sum = 0 //Shuma fillestare
let hasBlackjack = false //A ka fitu lojtari 
let isAlive = false //a osht lojtari nloj
let message = " " //mesazhi 
let playerName=" "
let playerChpis=0
let playerBet=10
let betSum = 0
let messageEl= document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl= document.getElementById("player-el")
let betEl = document.getElementById("bet-el")
function player(){
    playerName="Blerton";
    playerChpis=500;
 }   
function bet(){
   
    
    if(playerChpis >0){
    betSum +=playerBet
    playerChpis -= playerBet
     console.log(playerChpis)
    }
   
if (playerBet>playerChpis){
    message= "You dont have enough money ."
}  
 player()
  
playerEl.textContent="Name "+ playerName+" Total chips "+ playerChpis 
betEl.textContent= "Minimum bet : " + playerBet +" Total bet "+ betSum 
}

//Funksjoni per me i marr numart te ndryshem nga 1 deri ne 13
function randomCard(){

let randomNumer=Math.floor(Math.random()*13) +1

    if (randomNumer>10){
        return 10
    }else if (randomNumer === 1){
        return 11
    }else {
        return randomNumer
    }
}
function renderGame(){

   cardsEl.textContent="Cards: "
     for (let i= 0 ; i< cards.length; i++ ){
         cardsEl.textContent += cards[i] + " "
     }

     sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message ="Want to draw a card"
       
       
    }else  if (sum === 21){
         message = "You got blackjack"
         hasBlackjack = true 
         playerChpis +=  betSum * 2
        

    }else {
        message= "You are out!!"
        isAlive = false //lojtari del nga loja 
        playerChpis -= betSum
    }
    messageEl.textContent=message ;

}

//Funksjoni qe ja filon lojes 
function startGame(){
    isAlive =true  //lojtari osht nloj 
    let firstCard= randomCard()
    let secondCard= randomCard()
    cards =[firstCard,secondCard]
    sum = firstCard+secondCard

    renderGame()

}  

function newCard(){
    if (isAlive && !hasBlackjack && cards.length){
    let card= randomCard()
    sum += card
    cards.push(card)
    renderGame()
  //  console.log(cards)
    }
}
function playAgain(){

    sum = 0 
    betSum=0
    isAlive = true 
    hasBlackjack = false
    cards =[]
    cardsEl.textContent="Cards: "
    sumEl.textContent = "Sum: " 
    messageEl.textContent="Welcome Back " + playerName;
    betEl.textContent= "Your bet :" 
}