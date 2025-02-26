---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
page-type: webextension-api-function
browser-compat: webextensions.api.downloads.getFileIcon
---

{{AddonSidebar}}

The **`getFileIcon()`** function of the {{WebExtAPIRef("downloads")}} API retrieves an icon for the specified download.

For new downloads, file icons are available after the {{WebExtAPIRef("downloads.onCreated")}} event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete.

Icon retrieval is done by querying the underlying platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingIcon = browser.downloads.getFileIcon(
  downloadId,           // integer
  options               // optional object
)
```

### Parameters

- `downloadId`
  - : An `integer` representing the ID of the download.
- `options` {{optional_inline}}

  - : An options `object` representing preferences for the icon to be retrieved. It can take the following properties:

    - `size` {{optional_inline}}
      - : An `integer` representing the size of the icon. The returned icon's size will be the provided size squared (in pixels). If omitted, the default size for the icon is 32x32 pixels.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the request succeeds, the promise will be fulfilled with a string representing the absolute URL of the icon. If the request fails, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This example logs the icon URL for the most recent download:

```js
function gotIcon(iconUrl) {
  console.log(iconUrl);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function getIcon(downloadItems) {
  if (downloadItems.length > 0) {
    latestDownloadId = downloadItems[0].id;
    let gettingIcon = browser.downloads.getFileIcon(latestDownloadId);
    gettingIcon.then(gotIcon, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(getIcon, onError);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-getFileIcon) API.

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
