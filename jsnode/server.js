//install Nodejs
//run on command line with node server.js
/*
What is Node.js?
Node.js is an open source server environment
Node.js is free
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server

Node.js is asynchronous

Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"

*/

//The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

//To include a module, use the require() function with the name of the module:

/*
var http = require('http');

//node as a web server

http.createServer(function (req, res) {

    //display as html so use header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
 //   console.log('The result is displayed in the Command Line Interface');
}).listen(8080);
*/

//step 1, create this module in another file:
/*
exports.myDateTime = function () {
    return Date();
  };
*/

//step 2, include module
/*
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
*/

//read part of url
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
*/

//example: localhost:8080/summer vs localhost:8080/winter

//split query string into readable parts:
/*
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
*/

//http://localhost:8080/?year=2017&month=July

//The Node.js file system module allows you to work with the file system on your computer.

//To include the File System module, use the require() method:

//var fs = require('fs');

/*
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files
*/

/*
use fs.readFile() to read this file

demofile1.html

<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>
*/

/*
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);



*/

/*
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

*/

/*
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/

/*
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/
/*
var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/

/*
The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
*/

/*
var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

*/

/*
The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()
The fs.appendFile() method appends the specified content at the end of the specified file:


*/

/*
var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

*/

//The fs.writeFile() method replaces the specified file and content

/*
var fs = require('fs');

//Replace the file with a new one:
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

*/

//To delete a file with the File System module,  use the fs.unlink() method.

//The fs.unlink() method deletes the specified file:
/*
var fs = require('fs');

//Delete the file mynewfile2.txt:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

*/

//To rename a file with the File System module,  use the fs.rename() method.

//The fs.rename() method renames the specified file:

/*
var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

*/

/*
The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:

var url = require('url');
*/

/*
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

//The parse method returns an object containing url properties
/*
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//The query property returns an object with all the querystring parameters as properties:
var qdata = q.query;
console.log(qdata.month);
*/

//make a summer.html file 
/*
<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>
*/

//winter.html
/*
<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>
*/

//Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

//demo_fileserver.js:
/*
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
*/

//Initiate demo_fileserver.js:

//C:\Users\Your Name>node demo_fileserver.js

//open this http://localhost:8080/summer.html and this http://localhost:8080/winter.html

//C:\Users\Your Name>npm install upper-case

/*
var http = require('http');
//include module
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Use our upper-case module to upper case a string:  
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);

*/

/*
Events in Node.js
Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

*/

/*
var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');

//Write to the console when the file is opened:
readStream.on('open', function () {
    console.log('The file is open');
  });
  
*/

/*
You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method.
*/

/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a sound!');
}

//Assign the eventhandler to an event:
eventEmitter.on('shout', myEventHandler);

//Fire the 'shout' event:
eventEmitter.emit('shout');


*/

/*
There is a very good module for working with file uploads, called "Formidable".

The Formidable module can be downloaded and installed using NPM:

C:\Users\Your Name>npm install formidable

*/

//var formidable = require('formidable');

//use formidable to upload files

/*

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);

*/

/*
Step 2: Parse the Uploaded File
Include the Formidable module to be able to parse the uploaded file once it reaches the server.

When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.


*/

/*
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

*/

/*
Step 3: Save the File
When a file is successfully uploaded to the server, it is placed on a temporary folder.

The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.

To move the file to the folder of your choice, use the File System module, and rename the file:

*/

/*
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
*/

/*
Send an Email
Now you are ready to send emails from your server.

Use the username and password from your selected email provider to send an email. This tutorial will show you how to use your Gmail account to send an email:
*/

/*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

*/

/*
To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:

Example
Send email to more than one address:

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}

*/

/*
To send HTML formatted text in your email, use the "html" property instead of the "text" property:

Example
Send email containing HTML:

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}

*/

