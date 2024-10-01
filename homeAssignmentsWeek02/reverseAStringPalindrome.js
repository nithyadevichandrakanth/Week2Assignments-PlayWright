
function revereseASring(){
let  firstName = "MADAM";
let char =firstName.split("");
console.log(char);
let reverse = "";
for (let index = char.length-1; index >=0; index--) {    
    reverse=reverse+char[index]
    if (reverse===firstName){
        console.log(firstName+`is a Palindrome`);        
            } 
}
return reverse 
}
console.log(revereseASring());