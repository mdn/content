---
title: runtime.onUserScriptConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptConnect
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onUserScriptConnect
---

{{AddonSidebar}}

Fired when a connection is made with a user script from one of the extension's [`USER_SCRIPT` worlds](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld).

A user script can only connect and then sent messages from a `USER_SCRIPT` world that is configured by {{WebExtAPIRef('userScripts.configureWorld()')}} with `messaging` set to `true`.

## Syntax

```js-nolint
browser.runtime.onUserScriptConnect.addListener(listener)
browser.runtime.onUserScriptConnect.removeListener(listener)
browser.runtime.onUserScriptConnect.hasListener(listener)
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

- `function`

  - : The function called when this event occurs. The function is passed this argument:

    - `port`
      - : {{WebExtAPIRef('runtime.Port')}}. An object connecting the current script to the other context.

## Examples

This user script:

- Connects to the background script and stores `Port` in a variable `myPort`.
- Listens for messages on `myPort` and logs them.
- Sends messages to the background script using `myPort` when the user clicks the document.

```js
// user-script.js

let myPort = browser.runtime.connect({ name: "port-from-us" });
myPort.postMessage({ greeting: "hello from user script" });

myPort.onMessage.addListener((m) => {
  console.log("In the user script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

The corresponding background script:

- Listens for connection attempts from the user script, and when it receives a connection attempt:

  - Stores the port in a variable named `portFromUS`.
  - Sends the content script a message using the port.
  - Starts listening to messages received on the port and logs them.

- Sends messages to the content script using `portFromUS` when the user clicks the extension's browser action.

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromUS = p;
  portFromUS.postMessage({ greeting: "hi there user script!" });
  portFromUS.onMessage.addListener((m) => {
    console.log("In background script, received message from user script");
    console.log(m.greeting);
  });
}

browser.runtime.onUserScriptConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromUS.postMessage({ greeting: "they clicked the button!" });
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onUserScriptConnect) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
