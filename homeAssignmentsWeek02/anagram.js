//create a function with parameters
function  isAnagram(Str1, Str2)  {
    //trim the word, cange to lower, split it, sort it and join

let newWord1=Str1.trim().toLowerCase().split("").sort().join();
let newWord2=Str2.trim().toLowerCase().split("").sort().join();
if (newWord1==newWord2) {
    console.log("It is Anagram");   
    
} else{
    console.log("Not an Anagram");   
    
}
}
isAnagram("Listen", "Silent");

