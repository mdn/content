---
title: downloads.open()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/open
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - open
browser-compat: webextensions.api.downloads.open
---
{{AddonSidebar()}}

The **`open()`** function of the {{WebExtAPIRef("downloads")}} API opens the downloaded file with its associated application. A {{WebExtAPIRef("downloads.onChanged")}} event will fire when the item is opened for the first time.

To use this function in your extension you must ask for the "downloads.open" [manifest permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), as well as the "downloads" permission. Also, you can only call this function from inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let opening = browser.downloads.open(
  downloadId      // integer
)
```

### Parameters

- `downloadId`
  - : An `integer` representing the `id` of the {{WebExtAPIRef("downloads.DownloadItem")}} you want to open.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the request was successful, the promise will be fulfilled with no arguments. If the request failed, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This example opens the most recently downloaded item:

```js
function onOpened() {
  console.log(`Opened download item`);
}

function onError(error) {
  console.log(`Error opening item: ${error}`);
}

function openDownload(downloadItems) {
    if (downloadItems.length > 0) {
      let opening = browser.downloads.open(downloadItems[0].id);
      opening.then(onOpened, onError);
    }
  }

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"]
});

searching.then(openDownload, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#method-open) API.
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
