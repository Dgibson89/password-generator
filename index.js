const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneEl = document.getElementById("passwordOne-el")
let passwordTwoEl = document.getElementById("passwordTwo-el")

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    document.getElementById('passwords-box').classList.remove('hidden')
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()         
    }
    for (let j = 0; j < passwordLength; j++) {
        randomPassword2 += getRandomCharacter()         
    }
    passwordOneEl.textContent = randomPassword1
    passwordTwoEl.textContent = randomPassword2
} 
