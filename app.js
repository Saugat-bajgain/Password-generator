let passLength=8;
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghiklmnopqrstuvwxyz";
let symbols="!@#$%^&*()_+";
let allChar=upperCase+lowerCase+symbols;
let input=document.querySelector("#psw");
let but1=document.querySelector(".generate");
let but2=document.querySelector(".b1");

const genpassword=()=>{
    let password="";
for(let i=0;i<passLength;i++){
    password += allChar[Math.floor(Math.random() * allChar.length)];//allChar=26+26+10
}
input.value = password;// Set the generated password to the input field

}


const copypass=(password)=>{
input.select();//  making it ready for copying.
document.execCommand("copy");//copies the selected text
}

but1.addEventListener("click",genpassword);
but2.addEventListener("click",copypass)
