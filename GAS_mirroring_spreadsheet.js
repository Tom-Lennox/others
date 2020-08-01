
function atOpen() {
  copyValues();
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
  const sht = ss.getSheetByName("mirror");
  
  //  最終行、最終列
  const lastRow = sht.getLastRow();
  const lastCol = sht.getLastColumn();
  Logger.log(lastRow);
  Logger.log(lastCol);
  
  // 【指定】背景色、文字色、border、太字、折返し
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

function SetSort() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sht = ss.getSheetByName("mirror");

  // 降順
  sht.sort(1, false);
}

function copyValues() {
  const copyFrom = SpreadsheetApp.getActiveSpreadsheet();
  const sheet_copyFrom = copyFrom.getSheetByName('フォームの回答 1');
  const sheet_copyTo   = copyFrom.getSheetByName('mirror');
  
  //  最終行、最終列
  const lastRow = sheet_copyFrom.getLastRow();
  const lastCol = sheet_copyFrom.getLastColumn();
   
  const range = sheet_copyFrom.getRange(1, 1, lastRow, lastCol);
  const copyValue = range.getValues();
  sheet_copyTo.getRange(1, 1, lastRow, lastCol).setValues(copyValue);
}

