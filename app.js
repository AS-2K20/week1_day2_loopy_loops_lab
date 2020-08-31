// Note - Built-in functions can be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var ProGrad_1 = "AS";
console.log("The driver's name is "+ProGrad_1);
var ProGrad_2 = "AmudhanS";
console.log("The navigator's name is "+ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(ProGrad_1.length > ProGrad_2.length){
    console.log("The driver has the longest name, it has "+ProGrad_1.length+" characters");
}
else if(ProGrad_2.length > ProGrad_1.length){
    console.log("It seems that the navigator has the longest name, it has "+ProGrad_2.length+" characters");
}
else{
    console.log("Wow, you both have equally long names, "+ProGrad_1.length+" characters!");
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
var name_str="amudhans";
for(let i=0;i<name_str.length;i++){
    if(name_str.charAt(i)=='a' || name_str.charAt(i)=='e' || name_str.charAt(i)=='i' || name_str.charAt(i)=='o' || name_str.charAt(i)=='u'){
        console.log(name_str+" "+name_str.charAt(i)+" "+i);
    }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var name_str="AmudhanS";
var result;
var uc_count=0;
var lc_count=0;
for(let i=0;i<name_str.length;i++){
    result = name_str.charAt(i);
    if(result==result.toUpperCase()){
        uc_count++;
    }
    else if(result==result.toLowerCase()){
        lc_count++;
    }
}
console.log("Given String: "+name_str+" --> Upper Case Characters:"+uc_count);
console.log("Given String: "+name_str+" --> Lower Case Characters:"+lc_count);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
ProGrad_1="Driver";
for(let i=0;i<ProGrad_1.length;i++){
    console.log(" "+ProGrad_1.charAt(i).toUpperCase()+" ");
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
ProGrad_2="Navigator";
for(let i=ProGrad_2.length;i>=0;i--){
    console.log(" "+ProGrad_2.charAt(i)+" ");
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad_1+" "+ProGrad_2);
console.log(ProGrad_2+" "+ProGrad_1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
console.log("Driver's Name: "+ProGrad_1);
console.log("Navigator's Name: "+ProGrad_2);

if(ProGrad_1.localeCompare(ProGrad_2)==0){
    console.log("What?! You both have the same name?");
}
else if(ProGrad_1.localeCompare(ProGrad_2)>0){
    console.log("The driver's name goes first");
}
else{
    console.log("Yo, the navigator goes first definitely");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
window.onload=function(){
    var et_count=0;
    var whole_para = document.getElementById("p1").textContent;
    console.log("whole_para : "+whole_para);
    var splitted_var = whole_para.split(" ");
    for(let i=0;i<whole_para.length;i++){
        if(splitted_var[i]==="et"){
            et_count++;
        }
    }
    console.log("Number of Words in the Paragraph : "+splitted_var.length);
    console.log("Number of Times the Latin word 'et' appears : "+et_count);
}

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
