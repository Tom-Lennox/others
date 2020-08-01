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

// # ▼ Spread Sheet
// --
// 適用先：　spread sheet
// 一行説明：　ファイル開いたときに実行。
// --
function atOpen() {
    SetOthelloStyle();
    SetSort();
  }
  
  // --
  // 適用先：　spread sheet
  // 一行説明：　self dark mode.
  // 使い方：　Triggers > edit > Select event type　からOn open　にすれば開いたときだけ動作してくれる。
  // --
  function SetOthelloStyle() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sht = ss.getSheetByName("フォームの回答 1");
    
    //  最終行、最終列
    const lastRow = sht.getLastRow();
    const lastCol = sht.getLastColumn();
    Logger.log(lastRow);
    Logger.log(lastCol);
    
    // 【指定】背景色、文字色、border、太字、折返し
  //  var range = sht.getRange("A1:M999");
    const range = sht.getRange(1, 1, lastRow, lastCol);
    const CellColor = "#000000";
    const FontColor = "#FFFFFF";
    const BorderColor = "#0000FF";
    range.setBackground(CellColor);
    range.setBorder(true, true, true, true, true, true, BorderColor, SpreadsheetApp.BorderStyle.SOLID);
    range.setFontColor(FontColor);
    range.setFontWeight("bold");
    range.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  //  range.setFontSize(18);
  }
  
  // --
  // 適用先：　spread sheet
  // 一行説明：　sort
  // --
  function SetSort() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sht = ss.getSheetByName("フォームの回答 1");
  
    // 降順
    sht.sort(1,false);
  }
  