var fs = require("fs");

console.log("Going to create a file named 'welcome.txt' containing one line 'Hello Node'.");
fs.open('welcome.txt', 'w+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("file created");     
});

fs.writeFile('welcome.txt', 'Hello Node', function(err) {
    if (err) {
       return console.error(err);
    }else{
        console.log("check welcome.txt to verify");
    }});
    