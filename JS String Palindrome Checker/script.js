const go = () => {
  
  let your_string = document.getElementById('string').value;
  let string_length = your_string.length;
  let string_rev = your_string.split("").reverse().join("");
 let new_string = your_string.toUpperCase();
 let new_revstring = string_rev.toUpperCase();
 
  if(new_string == new_revstring){
    let string_pal= document.getElementById('stringPal').value = "Yes";
  }
  
  else{
    let string_pal= document.getElementById('stringPal').value = "No";
  }
 
  
  document.getElementById('stringLength').value = string_length;
 
  
}