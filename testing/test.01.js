const compiler = require("../build/bundle.cjs.js");

const compiledSVG = compiler(`
circle 50 50 10 #f00
line 10 10 100 100
`);

console.log(compiledSVG);