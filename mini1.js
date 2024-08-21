const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-length]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const CopyMsg=document.querySelector("[data-copy]");
const CopyBtn=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numberCheck=document.querySelector("#numbers");
const symbolCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateButton");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");
const symbols='!@#$%^&*(){}[]:<>,.?/~`';
let password="";
let passwordlength=10;
let checkCount=0;
handleSlider();
//copybtn
//handleslider
//generatepassword
//setindicator
//getrandominteger
//getrendomuppercase
//getrandomlowercase 
//getrandomnumber
//get randomsymbol
//calcstrength

function handleSlider(){
    inputSlider.value=passwordlength;
    lengthDisplay.innerText=passwordlength;
}
function SetIndicator(color){
indicator.Style.backgroundColor=color;
}
function getRandomInteger(min,max){
    return Math.floor(min+Math.random()*(max-min));
}
function generaterandomNumber(){
    return getRandomInteger(0,9);
}
function generateLowerCase(){
    return  String.fromCharCode( getRandomInteger(97,123));
}
function generateupperCase(){
    return  String.fromCharCode(getRandomInteger(65,90));
}
function generatesymbol(){
   const rand=getRandomInteger(0,symbols.length)
    return  symbols.charAt(rand);
}
function calcstrength(){

}

// async function copyContent(){
//     try{
//      await navigator.clipboard.writeText(passwordDisplay.value);
//      CopyMsg.innerText="Copied";
//     }
//     catch(e){
//         CopyMsg.innerText="Failed";   
//     }
// }
//     //to make invisibel;
// //   CopyMsg.classList.add("active");
// //   setTimeout( ()=>{
// //     CopyMsg.classList.remove("active");
// //   },2000);

function handleCheckBoxChange() {
    checkCount = 0;

    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    });

    if (passwordlength < checkCount) {
        passwordlength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})
inputSlider.addEventListener('input',(e)=>{
    passwordlength=e.target.value;
    handleSlider();
})
// CopyBtn.addEventListener('click',()=>{
//     if(passwordDisplay.value)
//     copyContent();
// })

generateBtn.addEventListener('click',()=>{
    console.log("abcd");
 if(checkCount==0)return;
 console.log("abcd");
 if(passwordlength<checkCount){
    passwordlength=checkCount;
    handleSlider();
 }

 password ="";
console.log("hello");
let funArr=[];
if(uppercaseCheck.checked){
    funArr.push(generateupperCase);
}
console.log("hello1");
if(lowercaseCheck.checked){
    funArr.push(generateLowerCase);
}
if(numberCheck.checked){
    funArr.push(generaterandomNumber);
}
if(symbolCheck.checked){
    funArr.push(generatesymbol);
}
console.log(funArr.length);
for(let i=0;i<funArr.length;i++){
password+=funArr[i]();
}
console.log(password.length);
for(let i=0;i<passwordlength-funArr.length;i++){
   let randomIndex=getRandomInteger(0,funArr.length);
   password+=funArr[randomIndex](); 

    }
    console.log(password);
    passwordDisplay.value=password;
});
















