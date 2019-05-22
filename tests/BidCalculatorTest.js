const assert = require('assert');
const bidCalculator = require("../bidCalculator")

describe('BidCalculator', function() {
  describe('Valid-bid-request-for-iOS', function() {
    it('should return iOS bid when given a valid bid request', function() {
      assert.deepEqual(bidCalculator({ 
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
      }), {
        "id": "bcaIDT1Nbv0zU8mn9tXQ6j",
        "seatbid": {
            "bid": [
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
            ]
        },
        "bidid": "4",
        "cur": "USD",
        "customdata": null,
        "nbr": null,
        "ext": null
      });
    });
  });

  describe('Valid-bid-request-for-Android', function() {
    it('should return Android bid when given a valid bid request', function() {
      assert.deepEqual(bidCalculator({ 
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
            "model": "Galaxy 6", 
            "os": ["Android"], 
            "osv": "10.1", 
            "hwv": "Galaxy 6", 
            "geo": { 
                "country": "USA"
              }
          }, 
          "ext": {} 
      }), {
        "id": "bcaIDT1Nbv0zU8mn9tXQ6j",
        "seatbid": {
            "bid": [
                {
                    "protocol": 2,
                    "nurl": "http://www.demo.com/price=${AUCTION_PRICE}",
                    "iurl": "http://www.demo.com/test.jpg",
                    "adm": "<VAST version=\"2.0\"><Ad id=\"1\"><InLine><AdSystem>2.0</AdSystem><AdTitle>ad title</AdTitle><Impression><![CDATA[https://test.unity3d.com/v1/tracking?android_id=1&creatives_id=1&device_model=motox&os=android&os_version=4]]></Impression><Creatives><Creative><Linear><Duration>00:00:16</Duration><TrackingEvents><Tracking event='start'><![CDATA[http://tracking-url]]></Tracking></TrackingEvents><VideoClicks><ClickThrough><![CDATA[https://video_click.com]]></ClickThrough><ClickTracking><![CDATA[https://video_click_tracking.com]]></ClickTracking></VideoClicks><MediaFiles><MediaFile delivery='progressive' width='16' height='9' type='video/mp4' bitrate='600' apiFramework='NONE'><![CDATA[https://media_file_site.your_file.mp4]]></MediaFile></MediaFiles></Linear></Creative><Creative></Creatives></InLine></Ad></VAST>",
                    "cat": [
                        "IAB1"
                    ],
                    "ext": {
                        "creativetype": "VAST 2.0",
                        "os": "Android",
                        "length": 16
                    },
                    "price": 4
                }
            ]
        },
        "bidid": "1",
        "cur": "USD",
        "customdata": null,
        "nbr": null,
        "ext": null
      });
    });
  });

  describe('Missing-required-attribute', function() {
    it('should return error when given a bid request without an id attribute', function() {
      assert.deepEqual(bidCalculator({ 
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
      }), 
      {
        "RequestError": "Missing required attribute: id"
    });
    });
  });

  describe('Missing-required-attribute-imp', function() {
    it('should return error when given a bid request without an imp attribute', function() {
      assert.deepEqual(bidCalculator({ 
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
      }), 
      {
        "RequestError": "Missing required attribute: imp"
    });
    });
  });

  describe('Missing-nested-attribute', function() {
    it('should return error when given a bid with a missing attribute on a nested attribute', function() {
      assert.deepEqual(bidCalculator({ 
        "id": "bcaIDT1Nbv0zU8mn9tXQ6j", 
        "imp": { 
            "id": "1", 
            "instl": 1, 
            "tagid": "15939-video", 
            "video": { 
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
      }),{
        "RequestError": "Missing required video attribute: mimes"
    });
    });
  });

  describe('Malformed length data', function() {
    it('should return error  when given a bid request with illogical min/max length', function() {
      assert.deepEqual(bidCalculator({ 
        "id": "bcaIDT1Nbv0zU8mn9tXQ6j", 
        "imp": { 
            "id": "1", 
            "instl": 1, 
            "tagid": "15939-video", 
            "video": { 
                "mimes": [ "video/mp4" ],
                "minduration": 55, 
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
      }), {
        "RequestError": " malformed duration specification"
    });
  });
});

});


