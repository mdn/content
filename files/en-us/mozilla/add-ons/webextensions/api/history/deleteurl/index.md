---
title: history.deleteUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteUrl
page-type: webextension-api-function
browser-compat: webextensions.api.history.deleteUrl
---

{{AddonSidebar}}

Removes all visits to the given URL from the browser history.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let deletingUrl = browser.history.deleteUrl(
  details         // object
)
```

### Parameters

- `details`

  - : `object`. Object containing the URL whose visits to remove.

    - `url`
      - : `string`. The URL whose visits should be removed.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be fulfilled with no parameters when the visits have been removed.

## Browser compatibility

{{Compat}}

## Examples

Remove all visits to "https\://example.org/" from history, then check that this URL no longer returned from {{WebExtAPIRef("history.search()")}}:

```js
let urlToRemove = "https://example.org/";

function onGot(results) {
  if (!results.length) {
    console.log(`${urlToRemove} was removed`);
  } else {
    console.log(`${urlToRemove} was not removed`);
  }
}

function onRemoved() {
  let searching = browser.history.search({
    text: urlToRemove,
    startTime: 0,
  });

  searching.then(onGot);
}

let deletingUrl = browser.history.deleteUrl({ url: urlToRemove });

deletingUrl.then(onRemoved);
```

Remove the last-visited page from history, with a listener to {{WebExtAPIRef("history.onVisitRemoved")}} to log the URL of the removed page:

```js
function onRemoved(removeInfo) {
  if (removeInfo.urls.length) {
    console.log(`Removed: ${removeInfo.urls[0]}`);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);

function onGot(results) {
  if (results.length) {
    console.log(`Removing: ${results[0].url}`);
    browser.history.deleteUrl({ url: results[0].url });
  }
}

let searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 1,
});

searching.then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteUrl) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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
