---
title: sessions.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/sessions/onChanged
page-type: webextension-api-event
browser-compat: webextensions.api.sessions.onChanged
---

{{AddonSidebar}}

Fired whenever the list of closed tabs or windows changes.

## Syntax

```js-nolint
browser.sessions.onChanged.addListener(listener)
browser.sessions.onChanged.removeListener(listener)
browser.sessions.onChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when this event occurs. It's passed no parameters.

## Browser compatibility

{{Compat}}

## Examples

This very annoying extension listens for `onChanged`, then immediately restores the most recently closed session, thus making it impossible to close windows or tabs:

```js
function restoreSession(sessionInfos) {
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

function restoreMostRecent() {
  let gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1,
  });
  gettingSessions.then(restoreSession, onError);
}

browser.sessions.onChanged.addListener(restoreMostRecent);
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
