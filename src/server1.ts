var sendNotification = function(data: any) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic NmY2ZDNkMjAtMWE5Mi00ZGU1LThiZmQtMjUwMWRjNjM3MzUx"
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res: any) {  
      res.on('data', function(data: any) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e: any) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
  };
  
  var message = { 
    app_id: "dc7c27bc-c603-4baa-a382-26feb9ca6e03",
    contents: {"en": "English Message"},
    included_segments: ["All"]
  };
  
  sendNotification(message);