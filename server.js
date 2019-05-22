const express = require('express')
const bodyParser = require('body-parser');
const bidCalculator = require("./BidCalculator")
const responseBids = require("./constants/ResponseBids");

const port = 3000
const app = express()
app.set('port', process.env.PORT || port);

app.use(bodyParser.json()); 

app.get('/', (req ,res) => res.sendFile(__dirname + '/index.html'))

app.get('/bid-validator/v1/bids', (req ,res) => res.send(responseBids));

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on port ${port}`)
 })

app.post('/bid-validator/v1/bids/search', (req, res) => {
    const responseObject = bidCalculator(req.body);
    if(responseObject.RequestError){
        res.statusCode = 400;
    }
    res.send(responseObject);
})