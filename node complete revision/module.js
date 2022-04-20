//Node js built in modules
const fs = require('fs');
let text = fs.readFileSync("test.txt","utf-8");
text = text.replace("around", "near")
console.log("The content of the file is ")
console.log(text);
console.log("creating a new file...")
fs.writeFileSync("testReplace.txt",text);