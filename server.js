const express = require("express");
const router = express.Router();
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require('path');

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Server Running ",port));

//serve static assests if we are in production
if(process.env.NODE_ENV === 'production'){
    // set Static folder
    app.use(express.static('client/build'));

    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,'build','index.html'));
    // })
}

router.get('/resume',(req,res)=>{
    res.download(`${__dirname}/Resume.pdf`);
})
