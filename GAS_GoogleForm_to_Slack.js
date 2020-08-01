function myFunction() {
  
}

// --
// 適用先：google form
// 一行説明：google form ⇒ slack通知
// --
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
      bodyPublic += title + "\n" + response + "\n\n";  
    }
  }
  bodyPublic += tags;
  sendToSlack(bodyPublic, "#from_google_form");
}


// --
// 適用先：spread sheet
// 一行説明：背景：黒、文字：白（太字）
// --
function SetOthelloStyle() {
    var sheet=SpreadsheetApp.getActiveSheet();
    var range=sheet.getRange("A1:AA9999");
    var CellColor="#000000";
    var FontColor="#FFFFFF";
    range.setBackground(CellColor);
    range.setFontColor(FontColor);
    range.setFontWeight("bold");
  //  range.setFontSize(18);
  }
