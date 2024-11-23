//npm -global command ,comes with node
//npm --version

//loacal dependency -use it only in this aprticular project
//npm i<packageName>

//global dependency - use it in any project
//npm install -g<packageName>
// sudo install -g <packageName> (mac)

//package.json -manifest file (stores important info about project/packages);
//mannual approach (create package.json in the root ,create properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y (everything default);

const a= require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = a.flattenDeep(items);
console.log(newItems);