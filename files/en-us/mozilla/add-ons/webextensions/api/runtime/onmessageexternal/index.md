---
title: runtime.onMessageExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onMessageExternal
---

{{AddonSidebar}}

Use this event to listen for messages from other extensions or web pages.

By default, an extension can receive messages from any other extension. However, the [`externally_connectable`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) manifest key can be used to limit communication to specific extensions and enable communication with websites.

To send a message that is received by the `onMessageExternal` listener, use {{WebExtAPIRef("runtime.sendMessage()")}}, passing the ID of the recipient in the `extensionId` parameter.

Along with the message, the listener is passed:

- a `sender` object with details about the message sender.
- a `sendResponse` function that the listener can use to send a response back to the sender.

This API can't be used in a content script.

See {{WebExtAPIRef("runtime.onMessage")}} for additional information on receiving messages and sending responses, as well as examples of the various options for sending responses.

## Syntax

```js-nolint
browser.runtime.onMessageExternal.addListener()
browser.runtime.onMessageExternal.removeListener(listener)
browser.runtime.onMessageExternal.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether a `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `message`
      - : `object`. The message. This is a JSON-ifiable object.
    - `sender`
      - : A {{WebExtAPIRef('runtime.MessageSender')}} object representing the sender of the message.
    - `sendResponse`

      - : A function to call, at most once, to send a response to the message. The function takes one argument, which is a JSON-ifiable object. This argument is passed back to the message sender.

        If you have more than one `onMessageExternal` listener in the same document, then only one can send a response.

        To send a response synchronously, call `sendResponse()` before the listener function returns.

        To send a response asynchronously, use one of these options:

        - Return a {{jsxref("Promise")}} from the listener function and resolve the promise when the response is ready. This is the preferred approach.
        - Keep a reference to the `sendResponse()` argument and return `true` from the listener function. You then call `sendResponse()` after the listener function returns.

          > [!NOTE]
          > Promise as a return value is not supported in Chrome until [Chrome bug 1185241](https://crbug.com/1185241) is resolved. As an alternative, return `true` and use `sendResponse` [as described for `runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

## Examples

In this example, the extension "blue\@mozilla.org" sends a message to the extension "red\@mozilla.org":

```js
// sender: browser.runtime.id === "blue@mozilla.org"

// Send a message to the extension whose ID is "red@mozilla.org"
browser.runtime.sendMessage("red@mozilla.org", "my message");
```

```js
// recipient: browser.runtime.id === "red@mozilla.org"

function handleMessage(message, sender) {
  // check that the message is from "blue@mozilla.org"
  if (sender.id === "blue@mozilla.org") {
    // process message
  }
}

browser.runtime.onMessageExternal.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessageExternal) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
