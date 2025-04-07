let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let str2 = "0123456789";
let characters = str1 + str2;

let result = "";
for (let i = 0; i < 5; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
}

console.log(result);
