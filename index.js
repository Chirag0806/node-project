
const colors = require('colors')
const http = require('http');
const data = require('./data');
const data1 = require('./data');
const fs = require('fs');
const path = require('path');
const { isUtf8 } = require('buffer');

// http.createServer((req,res)=>{
// res.writeHead(200,{'content-type':'application\json'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000);

// console.log("hello".blue);

// const app = require('./app')

// console.log("This is my code");
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a+b+c);

// if(a == 20){
//     console.log('matched');
// }

 // console.log(app.z());
//  console.warn("eiof")


//  FileSystem  

//  const input = process.argv;

//  if(input[2] == "add"){
//     fs.writeFileSync(input[3],input[4]);
//  }else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
//  }else{
//     console.log("invalid input")
//  }



// const dirPath = path.join(__dirname,'files');
// console.warn(dirPath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath + "/hello" + i + ".txt" ,"this is my text file")
// }

// fs.readdir(dirPath,(error,files) => {
//    files.forEach((file)=>{
//      console.log("File name is " + file)
//    })
// });
 // const filePath = `${dirPath}/hello1.txt`;
// fs.readFile(filePath,'utf-8',(error,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath," and i am addind some new data",(error)=>{
//  if(!error) console.log("file is updated");
// })

// fs.rename(filePath,`${dirPath}/New.txt`,(err)=>{
//   if(!err) console.log("File name is updated")
// })

// fs.unlinkSync(`${dirPath}/New.txt`);

let a = 20;
let b = 0;

let waitingData = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve(30)
   },2000)
})

waitingData.then((data)=>{
 console.log(a+data)
})






 

