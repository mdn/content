---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - port
  - runtime
browser-compat: webextensions.api.runtime.Port
---
{{AddonSidebar()}}

A `Port` object represents one end of a connection between two specific contexts, which can be used to exchange messages.

One side initiates the connection, using a `connect()` API. This returns a `Port` object. The other side listens for connection attempts using an `onConnect` listener. This is passed a corresponding `Port` object.

Once both sides have `Port` objects, they can exchange messages using `Port.postMessage()` and `Port.onMessage`. When they are finished, either end can disconnect using `Port.disconnect()`, which will generate a `Port.onDisconnect` event at the other end, enabling the other end to do any cleanup required.

You can use this pattern to communicate between:

- different parts of your extension (for example, between [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) and [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- between your extension and a [native application running on the user's computer](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- between your extension and a different extension

You need to use different connection APIs for different sorts of connections, as detailed in the table below.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Connection type</th>
      <th scope="col">Initiate connection attempt</th>
      <th scope="col">Handle connection attempt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Background script to content script</td>
      <td>{{WebExtAPIRef("tabs.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Content script to background script</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Extension to native application</td>
      <td>{{WebExtAPIRef("runtime.connectNative()")}}</td>
      <td>
        Not applicable (see
        <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >Native messaging</a
        >).
      </td>
    </tr>
    <tr>
      <td>Extension to Extension</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnectExternal")}}</td>
    </tr>
  </tbody>
</table>

## Type

Values of this type are objects. They contain the following properties:

- `name`
  - : `string`. The port's name, defined in the {{WebExtAPIRef("runtime.connect()")}} or {{WebExtAPIRef("tabs.connect()")}} call that created it. If this port is connected to a native application, its name is the name of the native application.
- `disconnect`
  - : `function`. Disconnects a port. Either end can call this when they have finished with the port. It will cause `onDisconnect` to be fired at the other end. This is useful if the other end is maintaining some state relating to this port, which can be cleaned up on disconnect. If this port is connected to a native application, this function will close the native application.
- `error`
  - : `object`. If the port was disconnected due to an error, this will be set to an object with a string property `message`, giving you more information about the error. See `onDisconnect`.
- `onDisconnect`

  - : `object`. This contains the `addListener()` and `removeListener()` functions common to all events for extensions built using WebExtension APIs. Listener functions will be called when the other end has called `Port.disconnect()`. This event will only be fired once for each port. The listener function will be passed the `Port` object. If the port was disconnected due to an error, then the `Port` argument will contain an `error` property giving more information about the error:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Note that in Google Chrome `port.error` is not supported: instead, use {{WebExtAPIRef("runtime.lastError")}} to get the error message.

- `onMessage`
  - : `object`. This contains the `addListener()` and `removeListener()` functions common to all events for extensions built using WebExtension APIs. Listener functions will be called when the other end has sent this port a message. The listener will be passed the value that the other end sent.
- `postMessage`
  - : `function`. Send a message to the other end. This takes one argument, which is a serializable value (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)) representing the message to send. It will be delivered to any script listening to the port's `onMessage` event, or to the native application if this port is connected to a native application.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Contains information about the sender of the message. This property will only be present on ports passed to `onConnect`/`onConnectExternal` listeners.

## Browser compatibility

{{Compat}}

## Examples

### Connecting from content scripts

This content script:

- connects to the background script and stores the `Port` in a variable called `myPort`.
- listens for messages on `myPort` and logs them.
- sends messages to the background script, using `myPort`, when the user clicks the document.

```js
// content-script.js

let myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({greeting: "they clicked the page!"});
});
```

The corresponding background script:

- listens for connection attempts from the content script.
- when it receives a connection attempt:

  - stores the port in a variable named `portFromCS`.
  - sends the content script a message using the port.
  - starts listening to messages received on the port, and logs them.

- sends messages to the content script, using `portFromCS`, when the user clicks the extension's browser action.

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "hi there content script!"});
  portFromCS.onMessage.addListener((m) => {
    console.log("In background script, received message from content script")
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({greeting: "they clicked the button!"});
});
```

#### Multiple content scripts

If you have multiple content scripts communicating at the same time, you might want to store each connection in an array.

```js
// background-script.js

let ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  // …
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(() => {
  ports.forEach((p) => {
        p.postMessage({greeting: "they clicked the button!"})
    })
});
```

### Connecting to native applications

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

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#type-Port) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.
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
