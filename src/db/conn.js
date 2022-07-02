const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weatherdb' , {
    newURLParser:true,
    useUnifiedTopology:true
}).then( ()=>{
    console.log("yea connected  to mongodb");
}).catch((e)=>{
    console.log(e);
});