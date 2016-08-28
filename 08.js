#!/usr/bin/env node

"use strict"

const fs = require("fs")

/////////////////////////////// ORIGINAL VERSION ///////////////////////////////
const langDescribe = fs.readFileSync(process.argv[2], "utf8")          // see above for more info
console.log("langDescribe", langDescribe);



// ///////////////////////////// DESTRUCTURED VERSION /////////////////////////////
// const [, , ...yourFile] = process.argv                               //returns array of any args - IE: "[ '08.json' ]"
// const [, , langDescribeTwo] = process.argv
// const langDescUTF8 = fs.readFileSync(langDescribeTwo, "utf8")
// // console.log(yourFile, "contents include:\n", langDescUTF8)
// process.stdout.write(`${yourFile} contents include:\n ${langDescUTF8}\n`)
// //////////////////// EXECUTE with "./08.js (fileToUseHere)" ////////////////////
// // ran "chmod +x 08.js" from TERMINAL to allow execution capabilities











/////////////////////////////////// LEARNING ///////////////////////////////////
// console.log("process.argv:\n", process.argv, "\n");                     // process.argv has 3 parts: (this shows us all 3 parts)
// // [  '/Users/EricD/.nvm/versions/node/v6.4.0/bin/node',                // [0] - node location
// //    '/Users/EricD/workspace/nssnode/exercises/foundations/08/08.js',  // [1] - file location (file you are "running")
// //    './08.json' ]                                                     // [2] - "argument" location (in our case "08.json")

// // we use "process.argv[2]" above to view the data within "08.json" and "utf8" ...
// // ...to make the buffer data legible (which we would otherwise get back)


///////////////////////////// DESTRUCTURED VERSION /////////////////////////////
// //SAME AS ABOVE BUT WITH COMMENTS
// // const [, , ...langDescribeTwo] = process.argv                          //returns array of any args - IE: "[ '08.json' ]"
// const [, , langDescribeTwo] = process.argv                                //returns only the first arg supplied
// const langDescUTF8 = fs.readFileSync(langDescribeTwo, "utf8")
// console.log("langDescUTF8", langDescUTF8)                                 // returns the destructured data (essentially: "process.argv[2]")
