#!/usr/bin/env node

"use strict"
//////////////////// EXECUTE with "./08.js (fileToUseHere)" ////////////////////
// ran "chmod +x 08.js" from TERMINAL to allow execution capabilities

const fs = require("fs")

// using "utf8"
fs.readFile("08.json", "utf8", function(err, buf) {       // ,"utf8" cleans up the "buf" data to legible from the buffered output
  if (err) throw err
  console.log("08.json data:\n", buf)
})


// // using "buf.toString()"
// fs.readFile("./08.json", function(err, buf) {
//   if (err) throw err
//   console.log(buf.toString())                            // toString() cleans up the "buf" data to legible from the buffered output
// })
