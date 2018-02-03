var textArea = document.createElement("textarea")
textArea.style.cssText = "position:absolute;left:-100%"
document.body.appendChild(textArea)

var parentId = chrome.contextMenus.create({
  id        : "attension_copy",
  "title"   : "参加者の一覧をクリップボードにコピー",
  "contexts": ["all"]
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "attension_copy") {
    textArea.select()
    document.execCommand("copy")
  }
});

function getParticipationData(str) {
  textArea.value = str
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    getParticipationData(request.text)
  }
)
