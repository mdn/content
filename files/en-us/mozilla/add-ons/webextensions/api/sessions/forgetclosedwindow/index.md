---
title: sessions.forgetClosedWindow()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/forgetClosedWindow
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - forgetClosedWindow
  - sessions
browser-compat: webextensions.api.sessions.forgetClosedWindow
---
{{AddonSidebar()}}Removes a closed window from the browser's list of recently closed windows. Note that the sites visited by that window are not removed from the browser's history. Use the {{WebExtAPIRef("browsingData")}} or {{WebExtAPIRef("history")}} APIs to remove history.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let forgettingWindow = browser.sessions.forgetClosedWindow(
  sessionId            // string
)
```

### Parameters

- `sessionId`
  - : `String`. The ID of the session you want to forget.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This will be fulfilled with no arguments when the session has been removed.

If an error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This code forgets the single most recently-closed session, whether it's a tab or a window:

```js
function forgetMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found")
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.forgetClosedTab(sessionInfo.tab.windowId, sessionInfo.tab.sessionId);
  } else {
    browser.sessions.forgetClosedWindow(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.sessions.getRecentlyClosed({maxResults: 1})
.then(forgetMostRecent, onError);
```

{{WebExtExamples}}
