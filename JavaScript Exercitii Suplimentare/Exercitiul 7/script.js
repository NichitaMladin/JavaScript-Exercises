//Write a JavaScript program to get the extension of a filename

function getFileExtension(filename){
    const extension = filename.split(".").pop();
    return extension;

}

const result1 = getFileExtension("node.js");
console.log(result1);
const result2 = getFileExtension("index.html");
console.log(result2);
const result3 = getFileExtension("webpack.config.js");
console.log(result3);