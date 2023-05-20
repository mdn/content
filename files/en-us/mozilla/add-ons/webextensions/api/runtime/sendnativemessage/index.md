---
title: runtime.sendNativeMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.sendNativeMessage
---

{{AddonSidebar()}}

Sends a single message from an extension to a native application.

This takes two mandatory parameters: the name of the native application and a JSON object which is the message to send it. The browser will launch the native application and deliver the message.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The first message sent by the native application is treated as a response to the `sendNativeMessage()` call, and the promise will be fulfilled with this message as a parameter. Note that you can't use {{WebExtAPIRef("runtime.onMessage")}} to get responses from the application: you must use the callback function instead.

A new instance of the application is launched for call to `runtime.sendNativeMessage()`. The browser will terminate the native application after getting a reply. To terminate a native application, the browser will close the pipe, give the process a few seconds to exit gracefully, and then kill it if it has not exited.

For more information, see [Native messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).

## Syntax

```js-nolint
let sending = browser.runtime.sendNativeMessage(
  application,             // string
  message                  // object
)
```

### Parameters

- `application`
  - : `string`. The name of the native application. This must match the "name" property in the [native application's manifest file](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging#app_manifest).
- `message`
  - : `object`. A JSON object that will be sent to the native application.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the sender sent a response, this will be fulfilled with the response as a JSON object. Otherwise it will be fulfilled with no arguments. If an error occurs while connecting to the native application, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Here's a background script that sends a "ping" message to the "ping_pong" app and logs the response, whenever the user clicks the browser action:

```js
function onResponse(response) {
  console.log(`Received ${response}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendNativeMessage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
