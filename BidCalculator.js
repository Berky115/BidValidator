const responseBids = require("./constants/ResponseBids");
const requiredFields = require("./constants/RequiredFields");
const impFields = require("./constants/ImpFields");

function bidCalculator(request){

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

module.exports = bidCalculator;