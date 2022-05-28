const fs = require("fs").promises;

async function fileSystem() {
  // Create file
  // await fs.writeFile('./hello.txt', 'amar snar bangladesh')
  //read file
  //const data = await fs.readFile("./hello.txt", "utf-8");
  //rename file name
  //await fs.rename('./hello.txt', 'main.js')
  //remove file
  //await fs.unlink('./main.js')
}

fileSystem();

//create file
// fs.writeFile("./test.txt", "hello jsvascript", (err) => {
//   if (err) console.log(err);
//   console.log('file create succesfully');
// });

//read file
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

//rename file name
// fs.rename('./test.txt', 'hello.txt', (err) =>{
//     if(err) console.log(err);
//     console.log('file rename succesfull')
// });

//remove file
// fs.unlink("./hello.txt", (err) => {
//   if (err) console.log(err);
//   console.log("file remove succesfully");
// });
