const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15;

function generatePassword() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar];
}
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += generatePassword()
        }

        return randomPassword
    }
function generatePasswords() {
    const PasswordOne = generateRandomPassword()
    const PasswordTwo = generateRandomPassword()
    document.getElementById("generatePasswordOne").textContent = PasswordOne
    document.getElementById("generatePasswordTwo").textContent = PasswordTwo
}
