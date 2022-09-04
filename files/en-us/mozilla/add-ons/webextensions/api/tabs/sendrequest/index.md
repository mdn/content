---
title: tabs.sendRequest()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendRequest
tags:
  - API
  - Add-ons
  - Deprecated
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - sendRequest
  - tabs
browser-compat: webextensions.api.tabs.sendRequest
---
{{AddonSidebar()}}

> **Warning:** This method has been deprecated. Use {{WebExtAPIRef("tabs.sendMessage()")}} instead.

Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The {{WebExtAPIRef('extension.onRequest')}} event is fired in each content script running in the specified tab for the current extension.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let sending = browser.tabs.sendRequest(
  tabId,                   // integer
  request                  // any
)
```

### Parameters

- `tabId`
  - : `integer`.
- `request`
  - : `any`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with the JSON response object sent by the handler of the message in the content script, or with no arguments if the content script did not send a response. If an error occurs while connecting to the specified tab or any other error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-sendRequest) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
