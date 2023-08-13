---
title: runtime.setUninstallURL()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/setUninstallURL
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.setUninstallURL
---

{{AddonSidebar()}}

Sets the URL to be visited when the extension is uninstalled. This can be used to clean up server-side data, do analytics, or implement surveys. The URL can be up to 1023 characters. This limit used to be 255, see [Browser compatibility](browser_compatibility) for more details.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let settingUrl = browser.runtime.setUninstallURL(
  url             // string
)
```

### Parameters

- `url`
  - : `string`. URL to open after the extension is uninstalled. This URL must have an `http` or `https` scheme. Can be up to 1023 characters. Set to an empty string to not open a new tab when the extension is uninstalled.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with no arguments when the URL is set or rejected with an error message if the operation fails.

## Browser compatibility

{{Compat}}

## Examples

```js
function onSetURL() {
  console.log("set uninstall URL");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let settingUrl = browser.runtime.setUninstallURL("https://example.org");
settingUrl.then(onSetURL, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-setUninstallURL) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
