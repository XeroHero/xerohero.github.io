// Google Apps Script for pages/cartello_contact.html
//
// Setup:
// 1. Create (or open) the Google Sheet you want submissions written to.
// 2. In the Sheet, go to Extensions > Apps Script.
// 3. Delete the default code and paste this file's contents in.
// 4. Click Deploy > New deployment > select type "Web app".
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Authorize when prompted, then copy the resulting Web app URL.
// 6. Paste that URL into SCRIPT_URL in pages/cartello_contact.html.

var SHEET_NAME = 'Contact Submissions';

function doPost(e) {
  try {
    var params = e.parameter;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
    }
    sheet.appendRow([
      new Date(),
      params.name || '',
      params.email || '',
      params.message || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
