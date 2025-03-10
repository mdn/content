---
title: history.onVisitRemoved
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisitRemoved
page-type: webextension-api-event
browser-compat: webextensions.api.history.onVisitRemoved
---

{{AddonSidebar}}

Fired when a page is removed completely from the browser history.

- If all visits to a single page are removed (for example, using {{WebExtAPIRef("history.deleteUrl")}}), then this event is fired once.
- If a range of visits is removed (for example, using {{WebExtAPIRef("history.deleteRange")}} or a browser feature like "Clear Recent History"), then it is fired once for each page _whose visits all fall within the cleared range_.
- If the browser's entire history is cleared (for example, using {{WebExtAPIRef("history.deleteAll")}}), then it is fired only once.

## Syntax

```js-nolint
browser.history.onVisitRemoved.addListener(listener)
browser.history.onVisitRemoved.removeListener(listener)
browser.history.onVisitRemoved.hasListener(listener)
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

  - : The function called when this event occurs. The function is passed this argument:

    - `removed`

      - : `object`. Details of the removal. This is an object containing two properties: a boolean `allHistory` and an array `urls`.

        - If this event is firing because all history was cleared, `allHistory` will be `true` and `urls` will be an empty array.
        - Otherwise, `allHistory` will be `false` and `urls` will contain one item, which is the URL of the removed page.

## Browser compatibility

{{Compat}}

## Examples

```js
function onRemoved(removed) {
  if (removed.allHistory) {
    console.log("All history removed");
  } else if (removed.urls.length) {
    console.log(`URL removed: ${removed.urls[0]}`);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisitRemoved) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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
