function myFunction() {
  
}

function sendToSlack(body, channel) {
  var url = "https://hooks.slack.com/services/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";
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

  var body = "Slack通知テストフォームが来たよ！\n"; 
  var applicant = "";
  var itemResponse = e.response.getItemResponses();
  var bodyPublic = "";

  for (var j = 0; j < itemResponse.length; j++){    
    var formData = itemResponse[j];
    var title = formData.getItem().getTitle();
    var response = formData.getResponse();

    bodyPublic += title + "\n" + response + "\n";
  }
  sendToSlack(bodyPublic, "#from_google_form");
}