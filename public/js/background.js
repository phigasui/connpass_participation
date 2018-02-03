var parentId = chrome.contextMenus.create({
  "title"   : "参加者のcsvを出力",
  "type"    : "normal",
  "contexts": ["all"],
  "onclick" : getClickHandler()
})
