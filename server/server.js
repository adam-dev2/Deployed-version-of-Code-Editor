const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/cpp',(req,res) => {
    try{
        
    }catch(err) {
        res.status(500).json({message: 'Error while running ur code'});
    }
})


app.listen(port,() => {
    console.log(`Server running on ${port}`);
})