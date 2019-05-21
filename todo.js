/*

Determine all fields to be validated "duration, os, ect"  +
Refactor/ code cleanup
Readme.txt update
Zip -> AWS 
Written questions
Order requestions, explain order , respond to customer 'DIRECTLY to customer'
Explain how this get request works. 
https://gameads-admin.applifier.com/stats/monetization-api?apikey=a9835133fb39630b98958bdfdc5efc7bf8ae10877be807ffcb81807c4daa1b30&fields=adrequests,available,views,revenue&splitBy=country&start=2019-04-11&end=2019-04-18
Review readme.txt : Where you will leave your responses to the aboe written questions
Note: Yes, that question is a bit unclear. Ideally, we want the candidate to explain how a client (e.g. a browser) would resolve this URL in regards to the HTTP protocol. I would recommend using a network traffic analyzers such as Charles Proxy. 


object bid:
id string; required Bidder generated bid ID to assist with logging/tracking.
impid string; required ID of the Imp object in the related bid request.

*/



//decomissioned
    // else if (!imp.id){
    //     return {'RequestError':' Missing required imp attribute: id'};
    // } else if (imp.banner && !imp.banner.format) { //
    //     return {'RequestError':' Missing required banner attribute: format'};
    // } else if (imp.video && !imp.video.mimes){ //
    //     return {'RequestError':' Missing required video attribute: mimes'};
    // } else if (imp.audio && !imp.audio.mimes){ //
    //     return {'RequestError':' Missing required audio attribute: mimes'};
    // } else if (imp.native && !imp.native.request){//
    //     return {'RequestError':' Missing required native attribute: request'};
    // } else if (imp.deal && !imp.deal.id){ //
    //     return {'RequestError':' Missing required deal attribute: id'};
    // } else if (imp.site && !imp.site.id){
    //     return {'RequestError':' Missing required site attribute: id'};
    // } else if( imp.video && !imp.video.protocols) {
    //     return {'RequestError': ' Missing required video attribute: protocols'};
    // }


        // if(request.imp && !request.imp.hasOwnProperty('id')){
    //     return {'RequestError': ' Missing required imp attribute: id'}
    // }
    
    // if(request.app && !request.app.hasOwnProperty('id')){
    //     return {'RequestError': ' Missing required app attribute: id'}
    // }

    // if(request.device && !request.device.hasOwnProperty('os')){
    //     return {'RequestError': ' Missing required device attribute: os'}
    // }