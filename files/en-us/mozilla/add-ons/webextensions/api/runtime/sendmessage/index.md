---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.sendMessage
---

{{AddonSidebar}}

Sends a single message to event listeners within your extension or a different extension.

If sending to your extension, omit the `extensionId` argument. The {{WebExtAPIRef('runtime.onMessage')}} event will be fired in each page in your extension, except for the frame that called `runtime.sendMessage`.

If sending to a different extension, include the `extensionId` argument set to the other extension's ID. {{WebExtAPIRef('runtime.onMessageExternal')}} will be fired in the other extension. By default, your extension can exchange messages with itself and any other extension (defined by `extensionId`). However, the [`externally_connectable`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) manifest key can be used to limit communication to specific extensions.

Extensions cannot send messages to content scripts using this method. To send messages to content scripts, use {{WebExtAPIRef('tabs.sendMessage')}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> [!NOTE]
> You can also use a [connection-based approach to exchange messages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

## Syntax

```js-nolint
let sending = browser.runtime.sendMessage(
  extensionId,             // optional string
  message,                 // any
  options                  // optional object
)
```

### Parameters

- `extensionId` {{optional_inline}}

  - : `string`. The ID of the extension to send the message to. Include this to send the message to a different extension. If the intended recipient has set an ID explicitly using the [browser_specific_settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in manifest.json, then `extensionId` should have that value. Otherwise it should have the ID that was generated for the intended recipient.

    If `extensionId` is omitted, the message is sent to your extension.

- `message`
  - : `any`. An object that can be structured clone serialized (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}

  - : `object`.

    - `includeTlsChannelId` {{optional_inline}}

      - : `boolean`. Whether the TLS channel ID will be passed into {{WebExtAPIRef('runtime.onMessageExternal')}} for processes that are listening for the connection event.

        This option is only supported in Chromium-based browsers.

Depending on the arguments it is given, this API is sometimes ambiguous. The following rules are used:

- **if one argument is given**, it is the message to send, and the message will be sent internally.
- **if two arguments are given:**

  - the arguments are interpreted as `(message, options)`, and the message is sent internally, if the second argument is any of the following:

    1. a valid `options` object (meaning, it is an object which contains only the properties of `options` that the browser supports)
    2. null
    3. undefined

  - otherwise, the arguments are interpreted as `(extensionId, message)`. The message will be sent to the extension identified by `extensionId`.

- **if three arguments are given**, the arguments are interpreted as `(extensionId, message, options)`. The message will be sent to the extension identified by `extensionId`.

Note that before Firefox 55, the rules were different in the 2-argument case. Under the old rules, if the first argument was a string, it was treated as the `extensionId`, with the message as the second argument. This meant that if you called `sendMessage()` with arguments like `("my-message", {})`, then it would send an empty message to the extension identified by "my-message". Under the new rules, with these arguments you would send the message "my-message" internally, with an empty options object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the receiver sent a response, this will be fulfilled with the response. Otherwise it will be fulfilled with no arguments. If an error occurs while connecting to the extension, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Here's a content script that sends a message to the background script when the user clicks the content window. The message payload is `{greeting: "Greeting from the content script"}`, and the sender also expects to get a response, which is handled in the `handleResponse` function:

```js
// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  const sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

The corresponding background script looks like this:

```js
// background-script.js
function handleMessage(request, sender, sendResponse) {
  console.log(`A content script sent a message: ${request.greeting}`);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!NOTE]
> Instead of using `sendResponse()`, returning a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is the recommended approach for Firefox add-ons.
> Examples using a Promise are available in the [examples section](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) of the {{WebExtAPIRef('runtime.onMessage')}} listener.

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
