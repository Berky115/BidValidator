

# BidValidator

 An App designed to consume bid requests. Validate their formation, and response with the highest bidder from a predetermined list of responses. Created for Unity Technologies.


 ## Use

**sendRequest:** A Post request that consumes a JSON response object following the OpenRTB Specifications version 2.3 available online: [openRTB](https://www.iab.com/wp-content/uploads/2015/06/OpenRTB-API-Specification-Version-2-3.pdf)
 
 ## Sample request

```
{ 
    "id": "bcaIDT1Nbv0zU8mn9tXQ6j", 
    "imp": { 
        "id": "1", 
        "instl": 1, 
        "tagid": "15939-video", 
        "video": { 
            "mimes": [ "video/mp4" ],
            "minduration": 15, 
            "maxduration": 30, 
            "protocols": [2,2], 
            "battr": [5], 
            "w": 1024, 
            "h": 600
        }
    }, 
    "app": { 
        "id": "1", 
        "bundle": "com.unity3d.ads.example"
    }, 
    "device": { 
        "model": "iPhone", 
        "os": ["iOS"], 
        "osv": "10.1", 
        "hwv": "iphone6", 
        "geo": { 
            "country": "USA"
          }
      }, 
      "ext": {} 
  }

 ```

If the server is running as expected and the object passed in is valid, then the highest possible bid from the predetermined bid responses will be issues.

```
{
    "protocol": 2,
    "nurl": "http://www.demo.com/price=${AUCTION_PRICE}",
    "iurl": "http://www.demo.com/test.jpg",
    "adm": "<VAST version=\"2.0\"><Ad id=\"1\"><InLine><AdSystem>2.0</AdSystem><AdTitle>ad title</AdTitle><Impression><![CDATA[https://test.unity3d.com/v1/tracking?android_id=1&creatives_id=1&device_model=iPhone&os=iOS&os_version=6]]></Impression><Creatives><Creative><Linear><Duration>00:00:29</Duration><TrackingEvents><Tracking event='start'><![CDATA[http://tracking-url]]></Tracking></TrackingEvents><VideoClicks><ClickThrough><![CDATA[https://video_click.com]]></ClickThrough><ClickTracking><![CDATA[https://video_click_tracking.com]]></ClickTracking></VideoClicks><MediaFiles><MediaFile delivery='progressive' width='16' height='9' type='video/mp4' bitrate='600' apiFramework='NONE'><![CDATA[https://media_file_site.your_file.mp4]]></MediaFile></MediaFiles></Linear></Creative><Creative></Creatives></InLine></Ad></VAST>",
    "cat": [
        "IAB4"
    ],
    "ext": {
        "creativetype": "VAST 2.0",
        "os": "iOS",
        "length": 29
    },
    "price": 11
}
```


 ## Validation
 The server will issue a response error if the request is missing necessary fields. Noting what is missing from the request.
 Ex:
 ```
 { 
    "id": "bcaIDT1Nbv0zU8mn9tXQ6j", 
    "app": { 
        "id": "1", 
        "bundle": "com.unity3d.ads.example"
    }, 
    "device": { 
        "model": "iPhone", 
        "os": ["iOS"], 
        "osv": "10.1", 
        "hwv": "iphone6", 
        "geo": { 
            "country": "USA"
          }
      }, 
      "ext": {} 
  }
```

  Will issue a response, indicating that the required attribute 'imp' is missing from the request.

```
    {
        "RequestError": "Missing required attribute: imp"
    }
```

## Setup

 **Local:**
 To run locally your machine will need...
  - A stable version of [Node.js](https://nodejs.org)
  - A stable version of the node package manager [npm](https://www.npmjs.com/)

    ```git clone``` the repo to your machine.

    ```cd``` into the new directory

    ```npm install``` to apply all necessary dependencies 

    ```npm start``` or ```node server.js``` to begin running the server.

**To verify the app is running** Check ```localhost:3000``` through your browser. Note the default port is **3000**. You are welcome to change this if it conflicts with another local app.

**To get a bid response** send a Post request to the sever with ```/sendRequest``` alongside a valid JSON biddingRequest


 ### Live:
 If you would like skip local setup a live example can be found [here](http://bidvalidator-env.cqgr4xt6e8.us-east-2.elasticbeanstalk.com)


## Support
Please review the issues below and number them 1 through 3 based on the order in which you would handle them. Briefly describe your process for prioritizing the issues. 
Then write a response for each support request, as you would on the job. Your response should be directed to the customer. If necessary, describe what actions you would take next to resolve the issues.
```
Hello Unity,
I saw you require a categories(cat) array in the response. What should I fill for the cat array? What if some of our advertisers don’t have this information?
Thanks!
```
### Part 1:
I have prioritized this second of the three ticket requests. The user does not have the system active yet. This means there is no immediate threat to ad revenue. That said, they are attempting to implement the system. This implies they are a series collaborator and will be able to provide specific information while evaluating.

### Part 2:
* Dear customer,
*Thank you for reaching out to our support team. 
*The cat/categories array is populated by “Content Categories”. You can get a detailed breakdown of there use in the openRTB *Spec provided online: OpenRTB.

*While the array is required, it’s population/content is not. If an advertiser does not feel the need to take advantage of this *feature, they will not be rejected as a bidder.

*Hope that helps, please feel free to reach out again if you have additional questions.

*Cheers,
*Drew Facchiano
//Note: This is an optional field according to the docs. If this is a use case where they are being forced upon a user, then my explanation would change.

```
Hello,
What are the differences between the nurl and the adm fields? Which should I use?
```

### Part 1:
I chose to rank this as the lowest priority ticket. The customer has provided no context for the problem and does not display any signs of urgent need. Additionally, the question reads as a curiosity as opposed to a call for action.

### Part 2:
*Dear customer,

*Thank you for reaching out to our support team.

*To answer your question, the nurl is a string array object. It is used as a Win notice URL, which is called by the exchange *application if the bid wins. It can be used as an optional means of serving ad markup.

*In contrast the adm fields are string objects. They are intended as optional means of conveying ad markup in case the bid *wins. It supersedes the win notice if markup is included in both.

*For more information around these values, you can referencing the online OpenRTB docution spec under the Bid object. OpenRTB

*Hope that helps, please feel free to reach out again if you have additional or follow-up questions.

*Cheers,
*Drew Facchiano*

```
Hello,
I followed your RTB spec and finished integration. I can see that there are some clicks already, but I haven't seen any impressions. Could you help me take a look ? Here is my bid response...

```

### Part 1:
I have prioritize this as the highest the provided tickets. The customer is someone actively using the bid system. This implies the issue they have is persisting and possibly costing them in real time. Either through finance or flawed statistic information. As such they need a solution sooner then the above groups. Additionally they have provided a sample response, a useful tool for debugging.

### Part 2:
*Dear Customer,

*Thank you for reaching out our support team. 

*A lack of imp/impression objects implies a possible misstep during integration. 
*To help further, could you please send me any request objects being used at this time? Understanding the input can be useful *for evaluating the issue. This is also where you should see the initial impression data. 

*Kindly evaluate and if you have further insights, let me know!

*Cheers,
*Drew Facchiano

## Technical

```
Giving the link below, please explain in detail how does this link work?
https://gameads-admin.applifier.com/stats/monetization-api?apikey=a9835133fb39630b98958bdfdc5efc7bf8ae10877be807ffcb81807c4daa1b30&fields=adrequests,available,views,revenue&splitBy=country&start=2019-04-11&end=2019-04-18
```

### Analysis
The above is a Get request to the ‘monetization-api’. The intent is to respond with a collection of statics based on parameters passed in through the url. 

When called this request checks the value of the apikey parameter and then evaluates if said key is valid. If the key is missing or invalid an error will be thrown.

If apikey is missing from request:
```
{
    "error": "Invalid api key",
    "responseCode": 531,
    "status": "error"
}
```

If apikey is invalid:
```
{
    "error": "Authentication error",
    "responseCode": 500,
    "status": "error"
}
```


If the key is valid then the request will be used by the server to build a response using the following passed parameters.

**Fields:**  Fields is used by the api to determine what fields to populate in the response from the Applifter database. By default it will send back (Date,Country code,Country tier, adrequests, available ,offers ,started ,views ,revenue) for every record in the response.


**Default response:**

```
Date,Country code,Country tier,adrequests,available,offers,started,views,revenue
"2019-04-15 00:00:00","US",5,2,2,0,3,3,"0.00"
"2019-04-16 00:00:00","KR",5,1,1,0,1,1,"0.00"
"2019-04-16 00:00:00","US",5,3,3,0,0,0,"0.00"
"2019-04-17 00:00:00","US",5,67,67,0,65,11,"53.36"
```

**Response with fields=adrequests,available,views,revenue:**

```
Date,Country code,Country tier,adrequests,available,views,revenue
"2019-04-15 00:00:00","US",5,2,2,3,"0.00"
"2019-04-16 00:00:00","KR",5,1,1,1,"0.00"
"2019-04-16 00:00:00","US",5,3,3,0,"0.00"
"2019-04-17 00:00:00","US",5,67,67,11,"53.36"
```

**splitBy:** Displays/splits record data based on given field. 
**Start:** To determine the earliest valid records to receive. 
**End:** To determine the latest valid records to receive.

### Notes on Start/End behavior:
- If neither start nor end are specified then the latest record is returned.
- If end is specified but start is not then no records are returned.
- If start is specified without end then records from specific start time to latest are returned.


### A valid request:
If the request is valid and the server is running as expected then a collection of records will be delivered to the client from the Applifter database through the app server. If this call is made through a browser, then a csv file will be downloaded. If the call is made through a client such as postman, then the requested records/statistics will be displayed through said client.



