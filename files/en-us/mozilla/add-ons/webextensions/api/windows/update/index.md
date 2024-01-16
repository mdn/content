---
title: windows.update()
slug: Mozilla/Add-ons/WebExtensions/API/windows/update
page-type: webextension-api-function
browser-compat: webextensions.api.windows.update
---

{{AddonSidebar()}}

Updates the properties of a window. Use this to move, resize, and (un)focus a window, etc.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let updating = browser.windows.update(
  windowId,              // integer
  updateInfo             // object
)
```

### Parameters

- `windowId`
  - : `integer`. ID of the window to update.
- `updateInfo`

  - : `object`. Object containing the properties to update.

    - `drawAttention` {{optional_inline}}
      - : `boolean`. If `true`, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to `false` to cancel a previous `drawAttention` request.
    - `focused` {{optional_inline}}
      - : `boolean`. If `true`, brings the window to the front. If false, brings the next window in the z-order to the front.
    - `height` {{optional_inline}}
      - : `integer`. The height to resize the window to in pixels. This value is ignored for panels.
    - `left` {{optional_inline}}
      - : `integer`. The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels.
    - `state` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}}. The new state of the window. The `minimized`, `maximized` and `fullscreen` states cannot be combined with `left`, `top`, `width` or `height`.
    - `titlePreface` {{optional_inline}}
      - : `string`. Use this to add a string to the beginning of the browser window's title. Depending on the underlying operating system, this might not work on browser windows that don't have a title (such as about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
    - `width` {{optional_inline}}
      - : `integer`. The width to resize the window to in pixels. This value is ignored for panels.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('windows.Window')}} object containing the details of the updated window. If any error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

When the user clicks a browser action's icon, move the window to the top left corner:

```js
function onUpdated(windowInfo) {
  console.log(`Updated window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let updating = browser.windows.update(tab.windowId, {
    left: 0,
    top: 0,
  });
  updating.then(onUpdated, onError);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/#method-update) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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
