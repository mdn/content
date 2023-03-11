---
title: devtools.network.getHAR()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR
page-type: webextension-api-function
browser-compat: webextensions.api.devtools.network.getHAR
---

{{AddonSidebar()}}

Get a [HAR log](http://www.softwareishard.com/blog/har-12-spec/#log) for the page loaded in the current tab.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.devtools.network.getHAR()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object containing the HAR log for the current tab. For details of what the log object contains, refer to the [HAR specification](http://www.softwareishard.com/blog/har-12-spec/#log).

## Browser compatibility

{{Compat}}

## Examples

Log the URLs of requests contained in the HAR log:

```js
async function logRequests() {
  let harLog = await browser.devtools.network.getHAR();
  console.log(`HAR version: ${harLog.version}`);
  for (const entry of harLog.entries) {
    console.log(entry.request.url);
  }
}

logRequestsButton.addEventListener("click", logRequests);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools.network`](https://developer.chrome.com/docs/extensions/reference/devtools_network/) API.

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
