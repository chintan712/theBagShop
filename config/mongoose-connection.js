const mongoose = require('mongoose');
const dbgr = require("debug")("test:example"); // only can print the msg who has set the env varibles to "development" namespace 
const config = require("config");

mongoose
.connect(`${config.get("MONGODB_URI")}/thebagshop`)
.then(function(){
    dbgr("Connected!");
})
.catch(function(err){
    dbgr(err);
})
    
module.exports = mongoose.connection;

