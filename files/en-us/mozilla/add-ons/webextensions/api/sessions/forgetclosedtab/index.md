---
title: sessions.forgetClosedTab()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/forgetClosedTab
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.forgetClosedTab
---

{{AddonSidebar}}

Removes a closed tab from the browser's list of recently closed tabs. Note that the sites visited by that tab are not removed from the browser's history. Use the {{WebExtAPIRef("browsingData")}} or {{WebExtAPIRef("history")}} APIs to remove history.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let forgettingTab = browser.sessions.forgetClosedTab(
  windowId,            // integer
  sessionId            // string
)
```

### Parameters

- `windowId`
  - : `Integer`. The ID of the window that hosted the tab you want to forget.
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
    console.log("No sessions found");
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.forgetClosedTab(
      sessionInfo.tab.windowId,
      sessionInfo.tab.sessionId,
    );
  } else {
    browser.sessions.forgetClosedWindow(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.sessions
  .getRecentlyClosed({ maxResults: 1 })
  .then(forgetMostRecent, onError);
```

{{WebExtExamples}}
