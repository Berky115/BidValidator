const express = require('express')
const bodyParser = require('body-parser');
const responseBids = require("./ResponseBids");

const port = 3000
const app = express()

const impFields = [
    {  obj: 'banner', field: 'format'},
    {  obj: 'video', field:'mimes'},
    {  obj: 'audio', field:'mimes'},
    {  obj: 'native', field:'request'},
    {  obj: 'deal', field:'id'},
    {  obj: 'site', field: 'id'},
    {  obj: 'video', field: 'protocols'},
    {  obj: 'video', field: 'minduration'},
    {  obj: 'video', field: 'maxduration'}
]

const requiredObjectFields = [
    {  obj: 'imp', field: 'id'},
    {  obj: 'app', field:'id'},
    {  obj: 'device', field:'os'},
]

const requiredBaseFields = [
    { field: 'id'},
    { field: 'imp'},
]



app.use(bodyParser.json()); 

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, () => {
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


    if( validateFields(request, requiredBaseFields, false)  ) return validateFields(request,requiredBaseFields, false);

    if( validateFields(request.imp, impFields) ) return validateFields(request.imp,impFields);

    if( validateFields(request, requiredObjectFields)  ) return validateFields(request,requiredObjectFields);

    if(request.imp.video){
        if( request.imp.video.maxduration < request.imp.video.minduration) return {'RequestError':' malformed duration specification'};
    }
    
    let validBids = [];
    for(let elem of responseBids) {
        if(!elem.id){
            continue
        }
        let seats = elem.seatbid;
        for(seat of seats){
            if(!seat.bid) {
                console.log("Missing field 'bid' on seatbid");
                continue;
            }
            let bids = seat.bid;
            for(bid of bids){
                if( !bid.price){
                    console.log("missing field 'price' on bid");
                    continue;
                }
                try{
                    if( request.device.os.includes(bid.ext.os ) &&
                        bid.ext.length < request.imp.video.maxduration &&
                        bid.ext.length > request.imp.video.minduration ){
                        validBids.push({
                        'seat': seat,
                        'bid': bid
                        });
                    }
                } catch(e) {
                    return {'RequestError':' malformed /missing duration fields'}
                }
            }
        }
    }

  let currentBest = 0;
  let bidResponse = null;
  for(elem of validBids){
    if(elem.bid.price > currentBest){
      currentBest = elem.bid.price
      bidResponse = elem.seat;
    }
  }
  return bidResponse;
}

function validateFields(baseObject , validationFields, nested=true){
    if(nested){
        for(let fieldPair of validationFields){
            if(baseObject.hasOwnProperty(fieldPair.obj)  && !baseObject[fieldPair.obj].hasOwnProperty(fieldPair.field)){
                return {"RequestError" : "Missing required " + fieldPair.obj + " attribute: " + fieldPair.field};
            }
        }
    } else {
        for(let fieldPair of validationFields){
            if(!baseObject.hasOwnProperty(fieldPair.field)){
                return {"RequestError" : "Missing required attribute: " + fieldPair.field};
            }
        }
    }
}