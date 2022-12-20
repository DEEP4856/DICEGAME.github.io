//DICE1

var randomnumber1= Math.floor(Math.random() *6)+1; //1-6

var  randomdiceimage="dice"+randomnumber1+ ".png"; //dice1 .png -dice6.png concatenating

var randomimagesource ="images/"+randomdiceimage; 

var image1= document.querySelectorAll("img")[0];  //FOR SELECTING FIRST DICE OR FIRST DIV                                              

image1.setAttribute("src",randomimagesource);   //FOR SELECTING FIRST DICE OR FIRST DIV




//for 2nd dice 
var randomnumber2= Math.floor(Math.random()*6)+1;

var randomimagesource2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);  //for selecting second dice


//FOR WINNER ,LOSER,DRAW
if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML =" player1 wins!!! ";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML ="player2 wins!!!";
}
else {
    document.querySelector("h1").innerHTML ="Draw!!!";

}