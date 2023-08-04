---
title: downloads.removeFile()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
page-type: webextension-api-function
browser-compat: webextensions.api.downloads.removeFile
---

{{AddonSidebar()}}

The **`removeFile()`** function of the {{WebExtAPIRef("downloads")}} API removes a downloaded file from disk.

This API removes the file from disk, but does not remove it from the browser's downloads history, therefore a call to {{WebExtAPIRef("downloads.search()")}} will still return the item as a {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}, but its `exists` attribute will be `false`.

To remove a file from the downloads history, you need to use {{WebExtAPIRef("downloads.erase()")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> **Note:** If you want to remove a downloaded file from disk _and_ erase it from history, you have to call `removeFile()` before you call {{WebExtAPIRef("downloads.erase()")}}. If you try it the other way around you'll get an error when calling `removeFile()`, because the browser will no longer have a record of the download.

## Syntax

```js-nolint
let removing = browser.downloads.removeFile(
  downloadId      // integer
)
```

### Parameters

- `downloadId`
  - : An `integer` representing the id of the {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} you want to delete from disk.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the request was successful, the promise will be fulfilled with no arguments. If the request failed, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Remove the most recently downloaded file:

```js
function onRemoved() {
  console.log(`Removed item`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function remove(downloadItems) {
  if (downloadItems.length > 0) {
    let removing = browser.downloads.removeFile(downloadItems[0].id);
    removing.then(onRemoved, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(remove, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#method-removeFile) API.

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
