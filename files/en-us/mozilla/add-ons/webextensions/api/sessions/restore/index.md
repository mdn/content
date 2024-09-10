---
title: sessions.restore()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/restore
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.restore
---

{{AddonSidebar}}

Restores a closed tab or window. Restoring doesn't just reopen the tab or window: it also restores the tab's navigation history so the back/forward buttons will work. Restoring a window will restore all the tabs that the window contained when it was closed.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let restoringSession = browser.sessions.restore(
  sessionId             // string
)
```

### Parameters

- `sessionId`
  - : `string`. A string containing the session ID for the window or tab to restore. This can be found in the `sessionId` property of the {{WebExtAPIRef("tabs.Tab", "Tab")}} or {{WebExtAPIRef("windows.Window", "Window")}} object in the {{WebExtAPIRef("sessions.Session", "Session")}} returned from {{WebExtAPIRef("sessions.getRecentlyClosed()")}}.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This will be fulfilled with a {{WebExtAPIRef("sessions.Session", "Session")}} object representing the session that was restored.

## Browser compatibility

{{Compat}}

## Examples

This restores the single most recently-closed session, whether it's a window or tab:

```js
function restoreMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found");
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.restore(sessionInfo.tab.sessionId);
  } else {
    browser.sessions.restore(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1,
  });
  gettingSessions.then(restoreMostRecent, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

## Known issues

[Bug 1538119](https://bugzil.la/1538119) - Duplicate sessionId in browser.sessions.getRecentlyClosed() after "Restore previous session"
