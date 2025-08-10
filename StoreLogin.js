function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
        data.email,
        data.username,
        new Date()
    ]);

    return ContentService.createTextOutput(
        JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
}