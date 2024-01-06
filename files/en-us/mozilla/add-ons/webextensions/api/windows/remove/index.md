---
title: windows.remove()
slug: Mozilla/Add-ons/WebExtensions/API/windows/remove
page-type: webextension-api-function
browser-compat: webextensions.api.windows.remove
---

{{AddonSidebar()}}

Closes a window and all the tabs inside it, given the window's ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removing = browser.windows.remove(
  windowId        // integer
)
```

### Parameters

- `windowId`
  - : `integer`. ID of the window to close.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the window has been closed. If any error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

When the user clicks a browser action's icon, close the window in which the icon was clicked:

```js
function onRemoved() {
  console.log(`Removed window`);
}

function onError(error) {
  console.error(`Error:`, error);
}

browser.browserAction.onClicked.addListener((tab) => {
  let removing = browser.windows.remove(tab.windowId);
  removing.then(onRemoved, onError);
});
```

Close the current, e.g. popup, window when the user clicks a button on the page:

```js
// in a script loaded by the page in the window
document.querySelector("#close").addEventListener(async ({ button }) => {
  try {
    if (button) return; // not a left click
    const windowId = (await browser.windows.getCurrent()).id;
    await browser.windows.remove(windowId);
    // this point will never be reached, since the window is gone
  } catch (error) {
    console.error("Closing failed:", error);
  }
});
```

In Firefox, the same could be achieved with the `.allowScriptsToClose` window creation property and `window.close()`.

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/#method-remove) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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
