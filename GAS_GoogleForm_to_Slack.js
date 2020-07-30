function myFunction() {
  
}

function sendToSlack(body, channel) {
  var url = "【published URL】";
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

function test() {
  sendToSlack("テスト通知確認です", "#from_google_form");
}

function onFormSubmit(e){

  var itemResponse = e.response.getItemResponses();
  var bodyPublic = "";

  for (var j = 0; j < itemResponse.length; j++){    
    var formData = itemResponse[j];
    var title = formData.getItem().getTitle();
    var response = formData.getResponse();
    var tags = "";

    if(response) {
      switch(title) {
        case "■":
          tags = "■" + response;
          break;
        case "P || Q":
          bodyPublic = "## ▼ " + response + "\n";
          break;
        default:
          bodyPublic += "\n" + title + "\n" + response + "\n";  
          break;
      }
    }
    bodyPublic += tags
  }
  sendToSlack(bodyPublic, "#from_google_form");
}