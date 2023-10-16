---
title: extension.sendRequest()
slug: Mozilla/Add-ons/WebExtensions/API/extension/sendRequest
page-type: webextension-api-function
status:
  - deprecated
browser-compat: webextensions.api.extension.sendRequest
---

{{AddonSidebar}}{{Deprecated_Header}}

> **Warning:** This method has been deprecated. Use {{WebExtAPIRef("runtime.sendMessage")}} instead.

Sends a request to other listeners within the extension. Similar to {{WebExtAPIRef('runtime.connect')}}, but only sends a request with an optional response. The {{WebExtAPIRef('extension.onRequest')}} event fires in each page of the extension.

## Syntax

```js-nolint
chrome.extension.sendRequest(
  extensionId,             // optional string
  request,                 // any
  (response) => {/* … */}  // optional function
)
```

This API is also available as `browser.extension.sendRequest()` in a [version that returns a promise](/en-US/docs/Mozilla/Add-ons/WebExtensions/API#callbacks_and_promises).

### Parameters

- `extensionId` {{optional_inline}}
  - : `string`. The extension ID of the extension you want to connect to. If omitted, default is your own extension.
- `request`
  - : `any`.
- `responseCallback` {{optional_inline}}

  - : `function`. The function is passed these arguments:

    - `response`
      - : `any`. The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and {{WebExtAPIRef('runtime.lastError')}} will be set to the error message.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/extension/#method-sendRequest) API. This documentation is derived from [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) in the Chromium code.

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
