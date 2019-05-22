const express = require('express')
const bodyParser = require('body-parser');
const responseBids = require("./ResponseBids");
const requiredFields = require("./RequiredFields");
const impFields = require("./ImpFields");

const port = 3000
const app = express()
app.set('port', process.env.PORT || port);

app.use(bodyParser.json()); 

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on port ${port}`)
 })

app.post('/sendRequest', (req, res) => {
    const responseObject = submitHandler(req.body);
    if(responseObject.RequestError){
        res.statusCode = 400;
    }
    res.send(responseObject);
})

function submitHandler(request){

    if( validateFields(request, requiredFields)  ) return validateFields(request,requiredFields);

    if( validateFields(request.imp, impFields) ) return validateFields(request.imp,impFields);

    if( request.imp.video && request.imp.video.maxduration < request.imp.video.minduration) return {'RequestError':' malformed duration specification'};
    
    let validBids = [];
    for(let elem of responseBids) {
        if(!elem.hasOwnProperty('id')){
            continue
        }
        for(seat of elem.seatbid){
            if(!seat.hasOwnProperty('bid')) {
                console.log("Missing field 'bid' on seatbid");
                continue;
            }
            for(bid of seat.bid){
                if(!bid.hasOwnProperty('price')){
                    console.log("missing field 'price' on bid");
                    continue;
                }
                if( request.device.os.includes(bid.ext.os)) {
                    if(request.imp.video && 
                        bid.ext.length < request.imp.video.maxduration &&
                        bid.ext.length > request.imp.video.minduration) {
                        validBids.push({
                        id : request.id,
                        seatbid: seat,
                        bidid: elem.bidid,
                        cur: elem.cur,
                        bid: bid,
                        });
                    }
                }
            }
        }
    }

  return determineBid(validBids);
}

function determineBid(validBids) {
    let currentBest = 0;
    let bidResponse = { 'RequestError': ' No valid bid determined' };
    for (elem of validBids) {
        if (elem.bid.price > currentBest) {
            currentBest = elem.bid.price;
            bidResponse =  {
                id : elem.id,
                seatbid: elem.seatbid,
                bidid: elem.bidid,
                cur: elem.cur,
                customdata: null,
                nbr: null,
                ext: null,
                };
        }
    }
    return bidResponse;
}

function validateFields(baseObject , validationFields){
    for(let fieldPair of validationFields){
        if(fieldPair.obj){
            if(baseObject.hasOwnProperty(fieldPair.obj)  && !baseObject[fieldPair.obj].hasOwnProperty(fieldPair.field)){
                return {"RequestError" : "Missing required " + fieldPair.obj + " attribute: " + fieldPair.field};
            }
        } else {
            if(!baseObject.hasOwnProperty(fieldPair.field)){
                return {"RequestError" : "Missing required attribute: " + fieldPair.field};
            }
        }
    }
}