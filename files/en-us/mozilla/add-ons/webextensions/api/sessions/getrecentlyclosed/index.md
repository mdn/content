---
title: sessions.getRecentlyClosed()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getRecentlyClosed
  - sessions
browser-compat: webextensions.api.sessions.getRecentlyClosed
---
{{AddonSidebar()}}

Returns an array of {{WebExtAPIRef("sessions.Session", "Session")}} objects, representing windows and tabs that were closed in the current browsing session (that is: the time since the browser was started).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let gettingSessions = browser.sessions.getRecentlyClosed(
  filter             // optional object
)
```

### Parameters

- `filter` {{optional_inline}}
  - : `object`. A {{WebExtAPIRef("sessions.Filter")}} object that limits the set of sessions returned.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This will be fulfilled with an array of {{WebExtAPIRef("sessions.Session", "Session")}} objects, one for each of the most recently closed tabs or windows in the current browsing session, up to {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} or the number included in the `filter` argument, whichever is smaller. The array is given in the reverse of the order in which tabs or windows were closed, so the most recently closed will be at index 0.

If an error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This code restores the single most recently-closed session, whether it's a tab or a window:

```js
function restoreMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found")
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
    maxResults: 1
  });
  gettingSessions.then(restoreMostRecent, onError);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/sessions/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
