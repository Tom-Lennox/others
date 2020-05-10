// # ▼ 2行目に打刻
function InputDate() {
    var objSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var objSheet = objSpreadsheet.getActiveSheet();
    var objCell = objSheet.getActiveCell();
  
    objCell.getRow()
    // active >= 3行目
    if(objCell.getRow() >= 3) {
      // active >= C列
      if(objCell.getColumn() >= 3) {
        // 空白確認（上書き予防）
        if(objSheet.getRange(objCell.getRow(), 2).isBlank()) {
          // 日時、入力
          var date = Utilities.formatDate(new Date(), "JST", "yyyy-MM-dd HH:mm:ss");
          // B列
          objSheet.getRange(objCell.getRow(), 2).setValue(date);
        }
      }
    }
  }
//   # ▲ 2行目に打刻