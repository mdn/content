---
title: runtime.onUserScriptMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptMessage
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onUserScriptMessage
---

{{AddonSidebar}}

Use this event to listen for messages sent from one of the extension's [`USER_SCRIPT` worlds](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld).

A user script can only send messages using {{WebExtAPIRef('runtime.sendMessage')}} from a `USER_SCRIPT` world that is configured by {{WebExtAPIRef('userScripts.configureWorld()')}} with `messaging` set to `true`.

Along with the message, the listener is passed:

- a `sender` object with details about the message sender.
- a `sendResponse` function the listener can use to send a response back to the sender.

## Syntax

```js-nolint
browser.runtime.onUserScriptMessage.addListener(listener)
browser.runtime.onUserScriptMessage.removeListener(listener)
browser.runtime.onUserScriptMessage.hasListener(listener)
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

      - : A function to call, at most once, to send a response to the message. The function takes one argument, which is any JSON-ifiable object. This argument is passed back to the message sender.

        If you have more than one `onUserScriptMessage` listener in the same document, then only one can send a response.

        To send a response synchronously, call `sendResponse` before the listener function returns. To send a response asynchronously, do one of these:

        - keep a reference to the `sendResponse` argument and return `true` from the listener function. You can then call `sendResponse` after the listener function has returned.
        - return a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) from the listener function and resolve the promise when the response is ready.

## Examples

In this example, a user script in a `USER_SCRIPT` world with the ID `myScriptWorld` sends a message to the extension that registered it:

```js
// The user script
// Send a message to the extension that registered the user script
browser.runtime.sendMessage("my message");
```

```js
// The extension that registered the user script

function handleMessage(message, sender) {
  // check that the message originated from "myScriptWorld" world
  if (sender.userScriptWorldId === "myScriptWorld") {
    // process message
    console.log(message);
  }
}

browser.runtime.onUserScriptMessage.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onUserScriptMessage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
