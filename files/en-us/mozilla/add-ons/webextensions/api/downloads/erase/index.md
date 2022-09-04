---
title: downloads.erase()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/erase
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - erase
browser-compat: webextensions.api.downloads.erase
---
{{AddonSidebar()}}

The **`erase()`** function of the {{WebExtAPIRef("downloads")}} API erases matching {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} from the browser's download history, without deleting the downloaded files from disk.

To remove the files from disk, you need to use {{WebExtAPIRef("downloads.removeFile()")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> **Note:** If you want to remove a downloaded file from disk _and_ erase it from history, you have to call {{WebExtAPIRef("downloads.removeFile()")}} before you call `erase()`. If you try it the other way around you'll get an error when calling {{WebExtAPIRef("downloads.removeFile()")}}, because it no longer exists according to the browser.

## Syntax

```js
let erasing = browser.downloads.erase(
  query                    // DownloadQuery
)
```

### Parameters

- `query`
  - : A {{WebExtAPIRef('downloads.DownloadQuery')}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the call was successful, the promise will be fulfilled with an array of integers representing the ids of the erased {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}. If no items matching the query parameter could be found, the array will be empty. If the call failed, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Erase the most recent download:

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

let erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"]
});

erasing.then(onErased, onError);
```

Erase everything:

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

let erasing = browser.downloads.erase({});
erasing.then(onErased, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#method-erase) API.
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
