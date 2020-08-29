function myFunction() {
  
}

function sendToSlack(body, channel) {
  var url = "https://hooks.slack.com/services/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";
//  var url = "【published URL】";
  var data = { 
    "channel" : channel,
    "text" : body,  
    "unfurl_links": true,
  };
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(url, options);
}

function onFormSubmit(e){

  var itemResponse = e.response.getItemResponses();
  var bodyPublic = "";
  var tags = "";
  
  for (var j = 0; j < itemResponse.length; j++){    
    var formData = itemResponse[j];
    var title = formData.getItem().getTitle();
    var response = formData.getResponse();

//    if(response) {
//      switch(title) {
//        case "tag":
//          tags = "■" + response;
//          break;
//        case "P || Q":
//          bodyPublic = "## ▼ " + response + "\n";
//          break;
//        default:
//          bodyPublic += "\n" + title + "\n" + response + "\n";  
//          break;
//      }
//    }
    if(response) {
      if(j !== 0) {
        bodyPublic += "## ▼ " + response + "\n\n";
      }else {
        tags = "■" + response;
      }
    }
  }
  bodyPublic = "```\n" + bodyPublic + "\n```\n";
  bodyPublic += tags;
  sendToSlack(bodyPublic, "#from_google_form");
}
