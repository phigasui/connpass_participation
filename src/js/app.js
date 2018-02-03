const $ = require("jquery")

const tables = [
  [".participation_table_area", "参加者"],
  [".cancelled_table_area", "キャンセル"]
]

function getClickHandler() {
  var rows = [];
  tables.forEach(function (participation) {
    $(participation[0]).each(function () {
      var label = $(this).find("th .label_ptype_name").text().trim()
      $(this).find(".display_name").each(function () {
        var row = participation[1] + '\t' + label + '\t' + $(this).text().trim()
        rows.push(row)
      })
    })
  })

  if (rows.length > 0) {
    var data = rows.join('\n')
    chrome.runtime.sendMessage({
      text: data
    });
  }
}

getClickHandler()
