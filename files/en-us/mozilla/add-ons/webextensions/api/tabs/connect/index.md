---
title: tabs.connect()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/connect
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - connect
  - tabs
browser-compat: webextensions.api.tabs.connect
---
{{AddonSidebar()}}

Call this function to set up a connection between the extension's background scripts (or other privileged scripts, such as popup scripts or options page scripts) and any [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) that belong to this extension and are running in the specified tab. This function returns a {{WebExtAPIRef("runtime.Port")}} object.

When this is called, the {{WebExtAPIRef('runtime.onConnect')}} event will be fired in any content script belonging to this extension that are running in the specified tab. The event listener will be passed another {{WebExtAPIRef("runtime.Port")}} object. The two sides can then use the `Port` objects to exchange messages.

For more details, see [connection-based messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging). You can message without creating a connection, for advice on choosing between the options, see [Choosing between one-off messages and connection-based messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

## Syntax

```js
browser.tabs.connect(
  tabId,      // integer
  connectInfo // optional object
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab whose content scripts we want to connect to.
- `connectInfo` {{optional_inline}}

  - : An object with the following properties:

    - `name` {{optional_inline}}
      - : `string`. Will be passed into {{WebExtAPIRef("runtime.onConnect")}} event listeners in content scripts belonging to this extension and running in the specified tab.
    - `frameId` {{optional_inline}}
      - : `integer`. Open a port to a specific frame identified by `frameId` instead of all frames in the tab.

### Return value

{{WebExtAPIRef('runtime.Port')}}. A port that can be used to communicate with the content scripts running in the specified tab.

## Examples

In this example a background script listens for a click on a [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2), then connects to the currently active tab, then sends a message using the `Port` that's returned from `connect()`:

```js
function connectToTab(tabs) {
  if (tabs.length > 0) {
    let examplePort = browser.tabs.connect(
      tabs[0].id,
      {name: "tabs-connect-example"}
    );
    examplePort.postMessage({greeting: "Hi from background script"});
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingActive = browser.tabs.query({
    currentWindow: true, active: true
  });
  gettingActive.then(connectToTab, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-connect) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
