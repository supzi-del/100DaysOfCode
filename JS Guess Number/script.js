let number=Math.floor(Math.random()*10)
let output=document.getElementById('outputText')
let box=document.querySelector('.inputBox')

btn.addEventListener("click",function(){
  let input = document.getElementById('userInput').value;
  if(input == number){
    output.innerHTML=`CORRECT,your number was ${number}`; 
    box.style.background = "green";
    
  }
  else if(input==""){
     output.innerHTML="--"; 
  }
  else{
     output.innerHTML=`${input} is not correct`;
    box.style.background = "";
  }
});