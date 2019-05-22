const responseBids = [
    {
        "bidid": "1",
        "cur": "USD",
        "id": "1",
        "seatbid": [
            {
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
                            "os":"Android",
                            "length": 16
                        },
                        "price": 4
                    }
                ]
            }
        ]
    },   
    {
        "bidid": "2",
        "cur": "USD",
        "id": "2",
        "seatbid": [
            {
                "bid": [
                    {
                        "protocol": 2,
                        "nurl": "http://www.demo.com/price=${AUCTION_PRICE}",
                        "iurl": "http://www.demo.com/test.jpg",
                        "adm": "<VAST version=\"2.0\"><Ad id=\"1\"><InLine><AdSystem>2.0</AdSystem><AdTitle>ad title</AdTitle><Impression><![CDATA[https://test.unity3d.com/v1/tracking?android_id=1&creatives_id=1&device_model=iPhone&os=iOS&os_version=10.1]]></Impression><Creatives><Creative><Linear><Duration>00:00:29</Duration><TrackingEvents><Tracking event='start'><![CDATA[http://tracking-url]]></Tracking></TrackingEvents><VideoClicks><ClickThrough><![CDATA[https://video_click.com]]></ClickThrough><ClickTracking><![CDATA[https://video_click_tracking.com]]></ClickTracking></VideoClicks><MediaFiles><MediaFile delivery='progressive' width='16' height='9' type='video/mp4' bitrate='600' apiFramework='NONE'><![CDATA[https://media_file_site.your_file.mp4]]></MediaFile></MediaFiles></Linear></Creative><Creative></Creatives></InLine></Ad></VAST>",
                        "cat": [
                            "IAB2"
                        ],
                        "ext": {
                            "creativetype": "VAST 2.0",
                            "os":"iOS",
                            "length": 29
                        },
                        "price": 10
                    }
                ]
            }
        ]
    },   
    {
        "bidid": "3",
        "cur": "USD",
        "id": "3",
        "seatbid": [
            {
                "bid": [
                    {
                        "protocol": 2,
                        "nurl": "http://www.demo.com/price=${AUCTION_PRICE}",
                        "iurl": "http://www.demo.com/test.jpg",
                        "adm": "<VAST version=\"2.0\"><Ad id=\"1\"><InLine><AdSystem>2.0</AdSystem><AdTitle>ad title</AdTitle><Impression><![CDATA[https://test.unity3d.com/v1/tracking?android_id=1&creatives_id=1&device_model=iPhone&os=iOS&os_version=6]]></Impression><Creatives><Creative><Linear><Duration>00:00:45</Duration><TrackingEvents><Tracking event='start'><![CDATA[http://tracking-url]]></Tracking></TrackingEvents><VideoClicks><ClickThrough><![CDATA[https://video_click.com]]></ClickThrough><ClickTracking><![CDATA[https://video_click_tracking.com]]></ClickTracking></VideoClicks><MediaFiles><MediaFile delivery='progressive' width='16' height='9' type='video/mp4' bitrate='600' apiFramework='NONE'><![CDATA[https://media_file_site.your_file.mp4]]></MediaFile></MediaFiles></Linear></Creative><Creative></Creatives></InLine></Ad></VAST>",
                        "cat": [
                            "IAB3"
                        ],
                        "ext": {
                            "creativetype": "VAST 2.0",
                            "os":"iOS",
                            "length": 45
                        },
                        "price": 30
                    }
                ]
            }
        ]
    },    {
        "bidid": "4",
        "cur": "USD",
        "id": "4",
        "seatbid": [
            {
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
                            "os":"iOS",
                            "length": 29
                        },
                        "price": 11
                    }
                ]
            }
        ]
    }
];


module.exports = responseBids;
