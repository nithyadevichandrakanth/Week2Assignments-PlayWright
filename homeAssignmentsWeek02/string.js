let input = "Hello World";
function findLength(){

   let char= input.split(" ");
    console.log(char);
   let word= input.substring(6, 11)
   console.log(word);
    let lastWordLength=word.length;
    console.log("The last word is " +word +" with length"+ lastWordLength);
    
}
findLength();

let input1 = "   fly me   to   the moon  " ;
function findLength1(){

   let char1= input1.trim("");
    console.log(char1);
    console.log(char1.length);

   let anotherWord=char1.substring(18)
   console.log(anotherWord);   
   console.log(anotherWord.length);
   console.log(`The length of ${anotherWord} is ${anotherWord.length}`);
   
    
}
findLength1();