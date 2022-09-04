---
title: history.onVisited
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisited
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - History
  - Non-standard
  - Reference
  - WebExtensions
  - onVisited
browser-compat: webextensions.api.history.onVisited
---
{{AddonSidebar()}}

Fired each time the user visits a page. A {{WebExtAPIRef("history.HistoryItem")}} object is passed to the listener. This event fires before the page has loaded.

## Syntax

```js
browser.history.onVisited.addListener(listener)
browser.history.onVisited.removeListener(listener)
browser.history.onVisited.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `result`

      - : {{WebExtAPIRef('history.HistoryItem')}}. An object representing the item in the browser's history.

        At the time that this event is sent, the browser doesn't yet know the title of the page. If the browser has visited this page before and has remembered its old title, then the `HistoryItem.title` object will contain the old title of the page. If the browser doesn't have a record of the page's old title, then `HistoryItem.title` will be empty. To get the titles of pages as soon as they are known, listen for {{WebExtAPIRef("history.onTitleChanged")}}.

## Browser compatibility

{{Compat}}

## Examples

Listen for visits, and log the URL and visit time.

```js
function onVisited(historyItem) {
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
}

browser.history.onVisited.addListener(onVisited);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/history/#event-onVisited) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.
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
