---
title: runtime.connectNative()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connectNative
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - connectNative
  - runtime
browser-compat: webextensions.api.runtime.connectNative
---
{{AddonSidebar()}}Connects the extension to a native application on the user's computer. This takes the name of a native application as a parameter. It starts the native application and returns a {{WebExtAPIRef("runtime.Port")}} object to the caller. The caller can then use the `Port` to exchange messages with the native application using `Port.postMessage()` and `port.onMessage`. The native application will run until it exits itself, or the caller calls `Port.disconnect()`, or the page that created the `Port` is destroyed. Once the `Port` is disconnected the browser will give the process a few seconds to exit gracefully, and then kill it if it has not exited.

For more information, see [Native messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).

## Syntax

```js
let port = browser.runtime.connectNative(
  application // string
)
```

### Parameters

- `application`
  - : `string`. The name of the native application to connect to. This must match the "name" property in the [native application's manifest file](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging#app_manifest).

### Return value

A {{WebExtAPIRef('runtime.Port')}} object. The port which the caller can use to exchange messages with the native application.

## Browser compatibility

{{Compat}}

## Examples

This example connects to the native application "ping_pong" and starts listening for messages from it. It also sends the native application a message when the user clicks a browser action icon:

```js
/*
On startup, connect to the "ping_pong" app.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log(`Received: ${response}`);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-connectNative) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.
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
