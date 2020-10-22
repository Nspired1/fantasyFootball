const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const IP = process.env.IP;
const cors = require('cors');
const morgan = require('morgan');

//use packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

//root route for development
app.get("/", function(req, res){
    res.send('This is the ROOT ROUTE working');
})

// To start server type in the command line: "node index.js" or "npx nodemon"
app.listen(PORT, function(){
    console.log(`App is running and listening intently on PORT: ${PORT} and IP: ${IP}`);
});
