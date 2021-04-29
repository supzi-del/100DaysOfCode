//generate random number 
function generateNumber(){
   var userInput=document.getElementById("range").value;
 
  
  for(let i = 0; i<=userInput;i++)
  var randomChar= Math.floor(Math.random() * (i+1));
  
    document.getElementById("number").value=randomChar;
  
}