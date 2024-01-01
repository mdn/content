---
title: tabs.setZoom()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoom
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.setZoom
---

{{AddonSidebar()}}

Zooms the specified tab.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let zooming = browser.tabs.setZoom(
  tabId,           // optional integer
  zoomFactor       // number
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab to zoom. Defaults to the active tab of the current window.
- `zoomFactor`
  - : `number`. The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Otherwise, this must be a number between 0.3 and 5, specifying a zoom factor.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments after the zoom factor has been changed. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.

## Examples

Set the zoom factor for the current tab to 2:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoom(2);
setting.then(null, onError);
```

Set the zoom factor for the tab whose ID is 16 tab to 0.5:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoom(16, 0.5);
setting.then(null, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-setZoom) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
